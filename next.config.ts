import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/samdani',
  assetPrefix: '/samdani/',
};

export default nextConfig;
