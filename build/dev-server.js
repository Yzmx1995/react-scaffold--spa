const webpack = require("webpack");
process.env.NODE_ENV = process.argv[process.argv.length - 1];
const devWebpackConfig = require("./webpack.dev.conf");
const webpackDevServer = require("webpack-dev-server");
const port = 8888;
const host = "dev-react-scaffold-spa.com";

Object.keys(devWebpackConfig.entry || {}).map((key) => {
  devWebpackConfig.entry[key] = []
    .concat("react-hot-loader/patch")
    .concat(`webpack-dev-server/client?http://${host}:8888`)
    .concat("webpack/hot/only-dev-server")
    .concat(devWebpackConfig.entry[key]);
});
const compiler = webpack(devWebpackConfig);

function proxyTable() {
  const proxyConfig = {
    "/api/v1": "http://localhost:9999/api/v1",
  };
  const result = {};
  Object.keys(proxyConfig).forEach((key) => {
    result[key] = {
      target: proxyConfig[key],
      changeOrigin: true,
      pathRewrite: (() => {
        const pathRewriteResult = {};
        pathRewriteResult[`^${key}`] = "";
        return pathRewriteResult;
      })(),
    };
  });
  return result;
}

const app = new webpackDevServer(compiler, {
  publicPath: devWebpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: false,
  open: true,
  compress: true,
  disableHostCheck: true,
  host,
  overlay: true,
  proxy: proxyTable(),
  quiet: true,
  clientLogLevel: "warning",
});

app.listen(port, host, function (err) {
  if (err) {
    console.log(err);
  }
});
