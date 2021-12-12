/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ...require(`./config/${process.env.APP_ENV || 'local'}.json`),
  },
  webpack: (config, { isServer }) => {
    config.experiments = {asyncWebAssembly: true};
    // config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/webassembly.wasm';
    return config;
  },
}
