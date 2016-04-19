var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: ['./entry'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new htmlWebpackPlugin({
            template: './html/index.html',
            title: '下载首页'
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'  )
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(woff|woff2|eot|svg|ttf)$/,
            loader: 'url-loader?limit=10000&minetype=application/font'
        }]
    }
};
