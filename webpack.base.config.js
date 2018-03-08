/*jshint esversion:6*/

const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    index: './index.ts'
  },

  output: {
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new cleanWebpackPlugin('dist'),
    new uglifyjsWebpackPlugin()
  ],

  module: {
    rules:[
      {
        test: /\.ts/,
        use: [
          'ts-loader'
        ],
        exclude: /node_modules/
      },

      {
        test: /\.css|/
      }
    ]
  }
};