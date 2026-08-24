import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this Next app when the parent folder also has a lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
