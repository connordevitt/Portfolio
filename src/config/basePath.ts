const isVercel = !!process.env.VERCEL;
const isGitHubPages = !isVercel && process.env.NODE_ENV === 'production';

export const BASE_PATH = isGitHubPages ? '/Portfolio' : '';