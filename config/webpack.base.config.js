const { absPath } = require('./utils')
const { merge } = require('webpack-merge')

module.exports = (conf) =>
  merge(
    {
      resolve: {
        extensions: ['.js', '.vue', 'html'],
        alias: {
          '@': absPath('src'),
          vue$: 'vue/dist/vue.esm.js'
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
