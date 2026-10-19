import type { NextConfig } from 'next'

// Static export: `next build` writes plain HTML/CSS/JS to out/, which any static
// host (Cloudflare Pages, GitHub Pages) can serve without a Node server.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
}

export default nextConfig
