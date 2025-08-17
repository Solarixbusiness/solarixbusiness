/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Ottimizzazioni bundle JavaScript
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configurazione webpack per tree shaking e code splitting
  webpack: (config, { isServer }) => {
    // Abilita tree shaking più aggressivo
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    };

    // Code splitting più granulare
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
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
  experimental: {
    serverActions: {
      allowedOrigins: ['solarixbusiness.it', 'www.solarixbusiness.it']
    }
  },
}

module.exports = nextConfig
