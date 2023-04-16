/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    REACT_APP_OPENAI_API_KEY:
      "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",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
