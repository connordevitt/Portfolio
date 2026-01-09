import type { NextConfig } from "next";


const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: BASE_PATH,
};

export default nextConfig;
