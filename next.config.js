/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for deployment
  output: 'export',
  
  // Disable ESLint during builds for faster deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable image optimization for static export
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Compression settings
  compress: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Webpack configuration for optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
