import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
