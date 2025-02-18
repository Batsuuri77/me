import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/me", // Base path for the project
  trailingSlash: true, // Enable trailing slash
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
