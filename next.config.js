const path = require('path');

const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const withPWA = require('next-pwa');

const config = withImages(
  withCSS({
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
    exclude: path.resolve(__dirname, 'images/svg/'),
    webpack(config) {
      const linariaLoader = {
        loader: '@linaria/webpack-loader',
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      };

      config.module.rules.push({
        test: /\.jsx?$/,
        use: [linariaLoader],
      });

      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

      config.module.rules.push({
        // eslint-disable-next-line
        test: /\.svg$/,
        issuer: {
          // eslint-disable-next-line
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

      return config;
    },
  })
);

module.exports = withPWA(config);
