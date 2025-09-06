import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove asset prefix to fix CSS loading issues
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Protfolio2.0' : '',
};

export default nextConfig;
