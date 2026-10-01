import type { NextConfig } from "next";

/**
 * Dual build modes:
 *  - default (dev / standalone): full Next.js app with the /api/contact route.
 *  - BUILD_MODE=export (scripts/build-static.sh): fully static export to ./out
 *    for static hosting such as Cloudflare Pages. The API route is excluded and
 *    the contact form falls back to a prefilled mailto flow.
 */
const isStaticExport = process.env.BUILD_MODE === "export";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
        // keep export build artifacts away from the dev server's .next dir
        distDir: ".next-export",
      }
    : { output: "standalone" }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
