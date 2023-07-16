/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['assets.vercel.com', 'cdn.discordapp.com'],
        formats: ['image/avif', 'image/webp'],
        unoptimized: true
    },
    distDir: './build-app',
    transpilePackages: [],
    trailingSlash: true
  }
    
module.exports = nextConfig