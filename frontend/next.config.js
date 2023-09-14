const { get } = require("@vercel/edge-config");
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
 /*  webpack: (config) => {
  config.resolve.fallback = {
   fs: false,
   net: false,
   dns: false,
   child_process: false,
   tls: false,
  };

  return config;
 }, */
 pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
 experimental: {
  serverActions: true,
  serverActionsBodySizeLimit: "2mb",
 },
 images: {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [
   {
    protocol: "https",
    hostname: "freepik.com",
    pathname: "/**",
   },
  ],
 },
 headers() {
  return [
   {
    source: "/(.*)",
    headers: securityHeaders,
   },
  ];
 },
 redirects() {
  try {
   return get("redirects");
  } catch {
   return [];
  }
 },
 async redirects() {
  return [
   {
    source: "/pain-treatment-in-las-vegas",
    destination: "/pain-management-in-las-vegas",
    permanent: true,
   },
   {
    source: "/neck-pain",
    destination: "/neck-pain-las-vegas",
    permanent: true,
   },
   {
    source: "/joint-pain",
    destination: "/joint-pain-las-vegas",
    permanent: true,
   },
   {
    source: "/knee-pain",
    destination: "/knee-pain-las-vegas",
    permanent: true,
   },
   {
    source: "/back-pain",
    destination: "/back-pain-las-vegas",
    permanent: true,
   },
   {
    source: "/chronic-pain",
    destination: "/chronic-pain-las-vegas",
    permanent: true,
   },
  ];
 },
};

const ContentSecurityPolicy = `    
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
`;

const securityHeaders = [
 // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
 {
  key: "Content-Security-Policy",
  value: ContentSecurityPolicy.replace(/\n/g, ""),
 },
 // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
 {
  key: "Referrer-Policy",
  value: "origin-when-cross-origin",
 },
 // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
 {
  key: "X-Frame-Options",
  value: "DENY",
 },
 // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
 {
  key: "Strict-Transport-Security",
  value: "max-age=31536000; includeSubDomains; preload",
 },
 // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
 {
  key: "Permissions-Policy",
  value: "camera=(), microphone=(), geolocation=()",
 },
];

module.exports = withContentlayer(nextConfig);
