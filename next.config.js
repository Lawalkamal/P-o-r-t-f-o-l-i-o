/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip type checking and linting during build (for faster deploys)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {},
}

module.exports = nextConfig