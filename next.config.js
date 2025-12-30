/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'bryanminear.com',
      },
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
