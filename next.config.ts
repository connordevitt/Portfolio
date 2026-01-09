import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set base path for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
};

export default nextConfig;
