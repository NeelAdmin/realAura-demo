import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
    // This makes the environment variables available on the client side
    // They must be prefixed with NEXT_PUBLIC_
  },
};

export default nextConfig;
