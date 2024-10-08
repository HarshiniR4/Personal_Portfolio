/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
  devIndicators: {
    buildActivityPosition: 'top-right',
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
