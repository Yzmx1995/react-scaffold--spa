const { merge } = require("webpack-merge");
const prodWebpackConfig = require("./webpack.production.conf");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(prodWebpackConfig, {
  plugins: [new BundleAnalyzerPlugin({ generateStatsFile: true })],
});
