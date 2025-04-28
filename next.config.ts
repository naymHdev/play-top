import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during build
  },
  /* other config options here */
};

export default nextConfig;
