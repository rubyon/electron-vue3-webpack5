const { merge } = require('webpack-merge')
const { absPath } = require('./utils')

module.exports = (conf) =>
  merge(
    {
      resolve: {
        extensions: ['.js', '.vue', 'html'],
        alias: {
          '@': absPath('src'),
          vue: '@vue/runtime-dom'
        }
      },
      stats: {
        colors: true,
        chunks: false,
        modules: false
      }
    },
    conf
  )
