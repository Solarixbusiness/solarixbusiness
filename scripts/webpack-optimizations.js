
// OTTIMIZZAZIONI WEBPACK SUGGERITE
// Aggiungi in next.config.js

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ottimizzazioni code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 100000,
        cacheGroups: {
          // Separa React in chunk dedicato
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Separa UI libraries
          ui: {
            test: /[\\/]node_modules[\\/](@headlessui|@radix-ui|@heroicons)[\\/]/,
            name: 'ui-libs',
            chunks: 'all',
            priority: 15,
          },
          // Vendor chunk ottimizzato
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            maxSize: 150000,
          }
        }
      };
    }
    return config;
  }
};