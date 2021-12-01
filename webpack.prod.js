const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const workboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: './src/client/index.js',
    output: {
        clean: true //clean the dist folder before output

    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"

            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }

        ]

    },
    plugins: [
            new htmlWebpackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html"

            }),
            new workboxPlugin.GenerateSW()

    ]

}