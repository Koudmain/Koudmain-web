import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/koudmain-web',
  assetPrefix: '/koudmain-web',
};

export default nextConfig;
