/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: 'nextui.org',
      },
      {
        protocol: 'https',
        hostname: 'party-finder-asset.s3.eu-west-1.amazonaws.com',
      },
    ],
    formats: ['image/webp'],
  },
};

export default nextConfig;
