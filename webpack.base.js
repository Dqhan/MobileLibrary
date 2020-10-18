const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|eot)$/,
                use: [
                    'url-loader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        // new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[
               {
                from: '3th-lib/showdown.min.js',
                to: ''
               },{
                from: 'demo/button.html',
                to: ''
               }
            ]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".less"]
    },
    devServer: {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 9527,
        proxy: {
          '/api': {
            target: 'http://localhost:9529/',
            ws: true,
            changeOrigin: true
          }
        },
        open:true
      },
}