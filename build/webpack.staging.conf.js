const { merge } = require("webpack-merge");
const prodWebpackConfig = require("./webpack.production.conf");

module.exports = merge(prodWebpackConfig, {});
