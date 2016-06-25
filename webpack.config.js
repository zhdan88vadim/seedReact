'use strict';
const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    context: __dirname + '/app',
    entry: './App.js',
    output: {
        filename: 'public/bundle.js'
    },

    devtool: 'source-map',

    resolve: {
        //Where modules
        root: path.resolve(__dirname, 'app'),
        modulesDirectories: [ 'node_modules' ],
        extensions: [ '', '.js' ]
    },

    resolveLoader: {
        //where loader-modules
        modulesDirectories: [ 'node_modules' ],
        moduleTemplates: [ '*-loader', '*' ],
        extensions: [ '', '.js' ]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            }
        ]
    }
};

module.exports = webpackConfig;