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
            /**
             *  Defining babel-loader to process all *js and *jsx files & ignore node_modules folder.
                Babel loader will trancompile these files to produce ES5 code
            */
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }, 
            /**
             * Configuring loaders to process scss and sass files & ignore node_modules folder
             */
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    /**
     * Specifying the location of our html template and favicon
     */
    plugins: [
		new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.ico"
        })
	]
};