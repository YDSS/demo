var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var entry = './src/index.js';
var entry = './src/redux-webpack/index.js';

var config = {
    entry: {
        app: ['webpack/hot/dev-server', entry],
        vendors: ['react']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /(\.jsx|\.js)$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css!less')
        }, {
            // font-awesome
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            loader: "url-loader?limit=10000&mimetype=application/font-woff" 
        }, {
            // font-awesome
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            loader: "file-loader" 
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    }
}

module.exports = config;
