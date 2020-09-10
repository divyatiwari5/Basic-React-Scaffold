// Merging development webpack with base webpack
const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');

/**
 * Defining environment and its port
 */
module.exports = merge(BaseConfig, {
    mode: 'development',
    devServer: {
        port: 3000
    }
});
