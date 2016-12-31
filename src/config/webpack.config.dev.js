//var path = require('path');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
//var webpack = require('webpack');
//var directoryName = 'build';

module.exports = webpackMerge(commonConfig, {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    output: {
        path: helpers.root('build'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
});