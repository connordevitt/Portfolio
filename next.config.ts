import type { NextConfig } from "next";


const isVercel = !!process.env.VERCEL;
const isGitHubPages = !isVercel && process.env.NODE_ENV === 'production';

const BASE_PATH = isGitHubPages ? '/Portfolio' : '';

const nextConfig: NextConfig = {
  
  ...(isGitHubPages && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  ...(BASE_PATH && { basePath: BASE_PATH }),
};

export default nextConfig;