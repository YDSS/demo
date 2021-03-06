var path = require('path');
var webpack = require('webpack');
var paths = require('./conf');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var entry = paths.ENTRY;

var config = {
    entry: {
        app: ['webpack/hot/dev-server', entry]
    },
    output: {
        path: path.join(__dirname, paths.DIST),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /(\.jsx|\.js)$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css')
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        })
    ],
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    }
}

module.exports = config;
