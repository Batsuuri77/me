import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/me",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
