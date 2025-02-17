import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site generation (SSG)
  //assetPrefix: "./me", // Ensures assets work in GitHub Pages' environment
  images: {
    unoptimized: true, // Disables image optimization (since it's not supported in GitHub Pages)
  },
};

export default nextConfig;
