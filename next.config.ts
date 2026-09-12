import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves this site as a static Next.js export.
  output: "export",
  images: {
    // The default Next.js image optimizer requires a server runtime.
    // Preserve the existing rendered image dimensions in the static build.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "covers.openlibrary.org" }],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
