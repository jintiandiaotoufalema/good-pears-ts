// import {Configuration} from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }]
            },
            { test: /\.ts$/, loader: "ts-loader" },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {

            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({ template: './index.html' })
    // ],
    output: {
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, '../src'),
            "@imgs": path.resolve(__dirname, '../public/imgs'),
            "@css": path.resolve(__dirname, '../public/css'),
        },
        extensions: ['.js', '.css', '.ts'],  
    },
    devtool: "eval-source-map",
};

module.exports = config;