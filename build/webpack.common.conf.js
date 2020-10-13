const path = require("path");
const webpack = require("webpack");
const conditionalCompiler = {
  loader: "js-conditional-compile-loader",
  options: {
    staging: process.env.NODE_ENV === "staging",
    development: process.env.NODE_ENV === "development",
    production: process.env.NODE_ENV === "production",
  },
};

module.exports = {
  mode: 'none',
  devtool: "cheap-module-eval-source-map",
  entry: {
    app: path.resolve(__dirname, "../src/index.js"),
    framework: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "assets/js/[name].[chunkhash:8].js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader", conditionalCompiler],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "../src"),
      'react-dom': '@hot-loader/react-dom'
    },
  },
};
