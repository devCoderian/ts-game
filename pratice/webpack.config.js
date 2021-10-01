const path = require('path');
const webpack = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions : ['.jsx', '.js', '.tsx', '.ts']
    },
    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    }, // loader
    plugins: [

    ], // {array},
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
}