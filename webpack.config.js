const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build'),
};

module.exports = {
    mode: 'development',

    entry: {
        app: PATHS.app,
    },

    output: {
        path: PATHS.build,
        filename: '[name].bundle.js',
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    devtool: 'inline-source-map',

    // plugins: [
    //     new ExtractTextPlugin({})
    // ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            },
            // {
            //     test: /\.scss$/,
            //     loader: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader',
            //     ],
            // }
        ],
    },
};