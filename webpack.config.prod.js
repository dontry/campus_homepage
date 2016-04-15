var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: ['webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './entry'
    ],
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
            template: './html/index.html'
        })
    ],
    module: {
        loaders: [{
            test: /\.csss$/,
            loaders: ['style', 'css']
        }]
    }
};
