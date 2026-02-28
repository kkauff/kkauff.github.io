/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Generate static HTML/CSS/JS
  images: {
    unoptimized: true,  // GitHub Pages doesn't support image optimization
  },
  basePath: '',  // Empty for user sites (username.github.io)
  assetPrefix: '',
}

module.exports = nextConfig
