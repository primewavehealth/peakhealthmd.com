/** @type {import('next').NextConfig} */
const nextConfig = {
 experimental: {
  appDir: true,
 },
 reactStrictMode: true,
 images: {
  loader: "default",
  domains: ["images.unsplash.com", "img.freepik.com"],
  formats: ["image/avif", "image/webp"],
 },
};

module.exports = nextConfig;
