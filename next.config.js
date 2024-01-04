/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
  images: {
    remotePatterns: [
      { hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com' },
      { hostname: 'jhsung23.notion.site' },
    ],
  },
};

module.exports = nextConfig;
