/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output - causes issues on Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Disable experimental features that might conflict
  experimental: {},
}

module.exports = nextConfig
