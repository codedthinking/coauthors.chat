import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization (unoptimized for static export)
  images: {
    unoptimized: true,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
