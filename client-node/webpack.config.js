var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: path.join(__dirname, 'src'),
        vendors: ['react', 'redux']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/static/",
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['react', 'es2015']}}
        ]
    }
};