var path = require('path');
var webpack = require('webpack');
var paths = require('./conf');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractTest = new ExtractTextPlugin('test/test.css');
var extractOtherStyle = new ExtractTextPlugin('style.css');

var entry = paths.ENTRY;

var config = {
    entry: {
        app: ['webpack/hot/dev-server', entry],
        'service-worker': ['./src/service-worker.js']
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
            loader: extractOtherStyle.extract(['css', 'sass'])
        }, {
            test: /\.css$/,
            loader: extractTest.extract(['css'])
        }]
    },
    plugins: [
        // new ExtractTextPlugin('style.css', {
        //     allChunks: true
        // })
        extractTest,
        extractOtherStyle
    ],
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    }
}

module.exports = config;
