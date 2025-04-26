/** @type {import('next').NextConfig} */
const nextConfig = {
  /* React’s extra checks & warnings in dev */
  reactStrictMode: true,

  /* Allow external images from Eneba’s CDNs */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'products.eneba.games',
        pathname: '/**',       // deal thumbnails
      },
      {
        protocol: 'https',
        hostname: 'static.eneba.games',
        pathname: '/**',       // logos, flags, etc.
      },
    ],
  },
};

export default nextConfig;
