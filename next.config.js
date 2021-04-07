const path = require('path');

const config = {
  exclude: path.resolve(__dirname, 'images/svg/'),
  webpack(webpackConfig) {
    webpackConfig.module.rules.push({
      // eslint-disable-next-line
      test: /\.svg$/,
      issuer: {
        // eslint-disable-next-line
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return webpackConfig;
  },
};

module.exports = config;
