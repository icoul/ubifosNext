/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
