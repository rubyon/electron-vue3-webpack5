const { absPath } = require('./utils')
const merge = require('./webpack.base.config')
const webpack = require('webpack')
const { wdsPort, devSourceMap } = require('./config')
const fs = require('fs')
const nodeModules = {}

fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = merge({
  mode: 'development',
  target: 'electron-main',
  devtool: devSourceMap,
  externals: nodeModules,
  entry: './src/main/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  targets: {
                    node: 7
                  }
                }
              ]
            ],
            plugins: ['@babel/transform-runtime']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: absPath('dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      WDS_PORT: wdsPort
    })
  ]
})
