const { merge } = require('webpack-merge')
const devConf = require('./webpack.dev.main.config')
const { prodSourceMap } = require('./config')

module.exports = merge(devConf, {
  mode: 'production',
  devtool: prodSourceMap
})
