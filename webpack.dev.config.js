/*jshint esversion:6 */
const webpackBaseConfig = require('./webpack.base.config');

const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(webpackBaseConfig, {
  devtool: 'inline-map-source',
  devServer: {
    contentBase: './dist',
    hot: true
  }, 
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]
});