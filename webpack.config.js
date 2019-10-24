const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const VENDOR = [
    'axios',
    'bootstrap',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
]

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,                   
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({     
            template: './src/index.html'
        }),
        new CopyPlugin([
            { from: './src/assets', to: 'assets' },
            // { from: 'other', to: 'public' },
          ]),
    ],
    devServer: {
        contentBase: './build',
        port: process.env.PORT || 4000,
        compress: true,
        open: true,     
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: true,  
        stats: 'minimal',
        inline: true
    }
}