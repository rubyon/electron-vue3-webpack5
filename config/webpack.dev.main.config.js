const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const fs = require('fs')
const { absPath } = require('./utils')
const merge = require('./webpack.base.config')
const { wdsPort, devSourceMap } = require('./config')

const nodeModules = {}

fs.readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 7
                  }
                }
              ]
            ]
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
    new webpack.DefinePlugin({ WDS_PORT: wdsPort }),
    new ESLintPlugin({ formatter: 'codeframe' })
  ]
})
