import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set asset prefix for GitHub Pages deployment
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio2.0' : '',
};

export default nextConfig;
