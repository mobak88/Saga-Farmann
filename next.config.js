/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.sagafarmann.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "https://share.vidyard.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
