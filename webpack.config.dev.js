/*
 * @Author: dontry
 * @Date:   2016-04-15 11:56:16
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-04-19 17:25:51
 */
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// function getEntrySources(sources) {
//     if (process.env.NODE_ENV !== 'production') {
//         sources.push('webpack-dev-server/client?http://localhost:8080');
//     }
//     return sources;
// }

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: ['webpack-dev-server/client?http://locoalhost:8080',
        'webpack/hot/dev-server',
        './entry'
    ],
    ouput: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './html/index.html'，
            filename: 'index'
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(woff|woff2|eot|svg|ttf)$/,
            loader: 'url-loader?limit=10000&minetype=application/font'
        }]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        progress: true
    }
};
