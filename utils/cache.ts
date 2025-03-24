import { Redis } from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export const cache = {
  async get<T>(key: string): Promise<T | null> {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  },

  async set(key: string, value: any, ttl?: number): Promise<void> {
    if (ttl) {
      await redis.setex(key, ttl, JSON.stringify(value));
    } else {
      await redis.set(key, JSON.stringify(value));
    }
  },

  async del(key: string): Promise<void> {
    await redis.del(key);
  },

  async clear(): Promise<void> {
    await redis.flushall();
  },

  async exists(key: string): Promise<boolean> {
    return (await redis.exists(key)) === 1;
  }
};

// Cache middleware per le API routes
export const withCache = (handler: any, ttl: number = 3600) => {
  return async (req: any, res: any) => {
    const key = `api:${req.url}`;
    
    try {
      const cachedData = await cache.get(key);
      
      if (cachedData) {
        return res.status(200).json(cachedData);
      }

      const data = await handler(req, res);
      await cache.set(key, data, ttl);
      
      return res.status(200).json(data);
    } catch (error) {
      console.error('Cache error:', error);
      return handler(req, res);
    }
  };
}; 