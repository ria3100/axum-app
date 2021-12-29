/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
  },
  env: {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    ...require(`./config/${process.env.APP_ENV || 'local'}.json`),
  },
};
