// config/webpack.dev.js
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: './main.js',

    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader?sourceMap=true', 'sass-loader?sourceMap=true']})
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: 'url-loader' },
                    { loader: 'svg-colorize-loader', options: { color1: '#000000', color2: '#FFFFFF' }}
                ]
            }
        ]
    },

    plugins: [new ExtractTextPlugin({filename: 'styles.css'})]
};
