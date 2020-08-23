const webpack = require('webpack');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',

    output: {
        filename: '[name].js'
    },

    mode: 'development',

    devtool: 'inline-source-map',

    resolve: {extensions: ['.js', '.jsx']},

    devServer: {
        publicPath: "/dist",
        contentBase: path.join(__dirname, './src/views'),
        hot: true,
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/proposal-class-properties']
                },
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },

    // plugins: [
    //     new WriteFilePlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ],
};
