'use strict'
const webpack = require('webpack')
const configType = process.argv[process.argv.length -1];
process.env.NODE_ENV = configType === 'analyzer' ? 'production' : configType;
const webpackConfig = require(`./webpack.${configType}.conf`);
webpack(webpackConfig, (err, stats) => {
  if(err || stats.hasErrors()) {
    console.log(err, 'err in build')
    console.log(stats.errors, 'stats.errors in build')
  }
});