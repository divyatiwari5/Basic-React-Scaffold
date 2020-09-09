const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }, 
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
		new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.ico"
        })
	]
};