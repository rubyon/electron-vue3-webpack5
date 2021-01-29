const { merge } = require('webpack-merge')
const devConf = require('./webpack.dev.renderer.config')
const { prodSourceMap } = require('./config')

module.exports = merge(devConf, {
  mode: 'production',
  devtool: prodSourceMap
})
