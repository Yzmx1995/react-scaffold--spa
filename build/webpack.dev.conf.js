const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const notifier = require("node-notifier");
const packageConfig = require("../package.json");
const commonWebpackConfig = require("./webpack.common.conf");

module.exports = merge(commonWebpackConfig, {
  output: {
    filename: "assets/js/[name].[hash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../index.html"),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        if (severity !== "error") {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: packageConfig.name,
          message: severity + ": " + error.name,
          subtitle: error.file || "",
        });
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
});
