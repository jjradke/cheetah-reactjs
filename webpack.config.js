'use strict';

var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var node_dir = __dirname + '/node_modules';
var lib_dir = __dirname + '/lib';

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  resolve: {
    modulesDirectories: ['node_modules', 'lib'],
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: './components/main.js'
  },
  output: {
    path: './', // This is where images AND js will go
    filename: 'cheetah-react.js' //this is the default name, so you can skip it
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.jsx$/,
        loaders: [ReactStylePlugin.loader(), 'babel-loader?stage=1'],
        exclude: [/node_modules/]
      }
    ]
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React',
    'jquery': '$',
    'falcor': 'falcor'
  },
  libraries: []
}


module.exports = config;