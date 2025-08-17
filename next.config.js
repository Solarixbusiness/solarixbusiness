/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
    serverActions: {
      allowedOrigins: ['solarixbusiness.it', 'www.solarixbusiness.it']
    }
  },
  // Riduce polyfill per browser moderni
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configurazione webpack per tree shaking e code splitting
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {  // Solo in produzione, client-side
      config.optimization = {
        ...config.optimization,
        usedExports: true,  // Tree-shaking aggressivo solo qui
      };
    }

    // Ottimizzazioni webpack per code splitting granulare
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 150000, // Limita chunk a 150KB max
      cacheGroups: {
        // React in chunk separato
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 20,
        },
        // UI Libraries separate
        ui: {
          test: /[\\/]node_modules[\\/](@headlessui|@radix-ui|@heroicons)[\\/]/,
          name: 'ui-libs',
          chunks: 'all',
          priority: 15,
        },
        // Next.js framework
        nextjs: {
          test: /[\\/]node_modules[\\/](next)[\\/]/,
          name: 'nextjs',
          chunks: 'all',
          priority: 10,
        },
        // Vendor rimanenti
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 5,
          maxSize: 200000, // Max 200KB per vendor chunk
        },
      },
    };

    if (!isServer) {
      // Code splitting più granulare
      config.optimization.splitChunks.cacheGroups.common = {
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true,
      };
    }

    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.solarixbusiness.it',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'solarixbusiness.it',
        port: '',
        pathname: '/**',
      },
    ],
    // domains è deprecato, tutti i domini sono stati migrati a remotePatterns
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  async headers() {
    return [
      // Statiche Next (JS/CSS build)
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' }
        ]
      },
      // Immagini ottimizzate
      {
        source: '/_next/image',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      },
      // Font e asset pubblici - regex corretta senza gruppi di cattura
      {
        source: '/:path*.(svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff2|woff|ttf|eot)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      },
      // Default: niente cache aggressiva su HTML/API, mantenendo hardening base
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' }
        ]
      }
    ];
  },
};

module.exports = nextConfig;