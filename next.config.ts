import type { NextConfig } from 'next';

// The waitlist form posts to this webhook from the browser: a build without it would ship a
// form that can never register anyone.
if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL) {
  throw new Error('NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL must be set to build the website');
}

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
