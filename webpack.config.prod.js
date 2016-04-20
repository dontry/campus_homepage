var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    devtool: 'source-map',
    entry: {
        index: './entry',
        contact: './entry2'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new CommonsPlugin({
            name: 'common',
            filename: 'common.js',
            chunks: ['jquery'],
            minChunks: Infinity
        }),
        new htmlWebpackPlugin({
            template: './html/index.html',
            filename: 'index.html',
            title: '下载首页'
        }),
        new htmlWebpackPlugin({
            template: './html/contact.html',
            filename: 'contact.html',
            title: '联系我们'
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(woff|woff2|eot|svg|ttf)$/,
            loader: 'url-loader?limit=10000&minetype=application/font'
        }]
    }
};
