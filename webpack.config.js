var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var webpack = require('webpack');

var config = {
    entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,    
            loader: 'babel-loader',   
            query: {
                presets: ['es2015', 'react']
            }
        },{
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        },{
          test: /\.less$/,
          loader: 'style!css!less'
        },{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }],
        noParse: [pathToReact]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false },
        })
    ]
};

module.exports = config;
