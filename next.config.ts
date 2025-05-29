import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/src/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
  serverActions: {
    bodySizeLimit: "10mb",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // other config options here
};

export default nextConfig;
