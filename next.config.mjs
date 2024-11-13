/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config, options) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
