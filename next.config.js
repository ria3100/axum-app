/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ...require(`./config/${process.env.APP_ENV || 'local'}.json`),
  },
}
