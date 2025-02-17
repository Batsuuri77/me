import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/your-repo-name", // Replace with your actual GitHub repo name
  trailingSlash: true, // Enable trailing slash
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
