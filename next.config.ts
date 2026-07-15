import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  httpAgentOptions: {
    keepAlive: false,
  },
};

export default nextConfig;
