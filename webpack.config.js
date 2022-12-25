// const webpack = require('webpack')
const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.mini.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [{ from: 'src/index.html' }]
    // }),
    // new HtmlWebpackPlugin({
    //   templateContent: ({ htmlWebpackPlugin }) =>
    //     '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
    //     htmlWebpackPlugin.options.title +
    //     '</title></head><body><div id="app"></div></body></html>',
    //   filename: 'index.html'
    // }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@css': path.resolve(__dirname, 'public/css')
    },
    extensions: ['.tsx', '.ts', '.js']
  }
}

module.exports = config
