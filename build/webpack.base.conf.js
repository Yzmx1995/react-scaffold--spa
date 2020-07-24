const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
      app: path.resolve(__dirname, '../src/main.js')
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[hash:8].js',
      publicPath: '/',
    },
}