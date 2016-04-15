/*
 * @Author: dontry
 * @Date:   2016-04-15 11:56:16
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-04-15 15:39:23
 */
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'productiion') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}

module.exports = {
    // devtool: 'cheap-eval-source-map',
    entry: ['webpack-dev-server/client?http://locoalhost:8080',
        'webpack/hot/dev-server',
        './js/entry'
    ],
    ouput: {
        path: path.join(__dirname, 'dev'),
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
            template: './html/index.html'
        }),
        new ExtractTextPlugin('dist/style.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
            // loaders: ['style', 'css']
        }]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
