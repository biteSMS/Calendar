const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const webpack = require('webpack');

var website = {
    publicPath: ''
}

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js',
        publicPath: website.publicPath
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            })
        }, {
            test: /\.(png|jsp|gif|jpg|svg|jpeg)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 0,
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }, ]
        }, {
            test: /\.(htm|html)$/i,
            use: ['html-withimg-loader']
        }, {
            test: /\.less$/,
            use: extractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                },{
                    loader: 'postcss-loader'
                }],
                fallback: 'style-loader'
            })
        },{
            test:/\.js$/,
            use: 'babel-loader',
            include: /src/,
            exclude: /node_modules/
        }]
    },
    plugins: [
        new uglify(),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: false,
            template: './src/index.html',
            favicon: './src/images/favicon.ico'
        }),
        new extractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './docs',
        host: 'localhost',
        port: 80,
        open: true,
        hot: true
    }
}