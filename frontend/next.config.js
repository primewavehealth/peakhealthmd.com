/** @type {import('next').NextConfig} */
const nextConfig = {
 experimental: {
  appDir: true,
  fontLoaders: [
   { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
 },
 reactStrictMode: true,
 images: {
  loader: "default",
  domains: ["images.unsplash.com", "img.freepik.com"],
 },
};

module.exports = nextConfig;
