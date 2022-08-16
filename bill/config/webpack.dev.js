const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8083,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'bill',
      filename: 'remoteEntry.js',
      exposes: {
        './BillApp' : './src/bootstrap'
      },
      remotes:{
        store: 'store@http://localhost:8082/remoteEntry.js'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}

module.exports = merge(commonConfig, devConfig);