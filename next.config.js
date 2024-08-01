/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  //output: 'standalone'
  output: "export",
};

module.exports = nextConfig;
