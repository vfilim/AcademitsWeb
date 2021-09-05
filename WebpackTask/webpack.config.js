const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./frontend/main.js",

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        }
    },

    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: ""
    },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: "./frontend/index.html"
        }),

        new MiniCssExtractPlugin({
            filename: "style.css"
        }),

        new VueLoaderPlugin()
    ]
};