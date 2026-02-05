import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/samdani.github.io',
  assetPrefix: '/samdani.github.io/',
};

export default nextConfig;
