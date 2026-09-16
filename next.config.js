/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "g.tlcdn.com" },
      { protocol: "https", hostname: "**.tlcdn.com" },
    ],
  },
};

module.exports = nextConfig;
