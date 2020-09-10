// Merging production webpack with base webpack
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.config.base");
/**
 * Defining environment
 */
module.exports = merge(BaseConfig, {
    mode: "production"
});
