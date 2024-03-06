/** @type {import('next').NextConfig} */
const nextConfig = {
  outDir: "export", // Corrected property name
  experimental: {
    images: true, // or any other experimental features
  },
};

module.exports = nextConfig;
