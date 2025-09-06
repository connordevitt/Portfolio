import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove this if you're deploying to a custom domain
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
