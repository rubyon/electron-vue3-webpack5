#! /bin/env node
const { spawn } = require('child_process')
const webpack = require('webpack')
const WDS = require('webpack-dev-server')
const rendererConf = require('./webpack.dev.renderer.config.js')
const appConf = require('./config')
const { runWebpack } = require('./utils')
const { say } = require('cfonts')
const chalk = require('chalk')

;(async () => {
  console.log(chalk.yellowBright.bold('[Webpack] compiling main...'))
  await runWebpack(require('./webpack.dev.main.config'))

  console.log(chalk.yellowBright.bold('[WDS] starting...'))
  const wds = new WDS(webpack(rendererConf), {
    port: appConf.wdsPort,
    hot: true,
    stats: {
      chunks: false,
      modules: false,
      colors: true
    }
  })

  wds.listen(appConf.wdsPort, 'localhost', () => {
    greeting()

    console.log(chalk.blueBright.bold('[WDS] started'))
    console.log(chalk.blueBright.bold('[App] starting...'))
    const app = spawn(
      'electron',
      [
        'dist/main.js',
        (appConf.pauseAtStart ? '--inspect-brk' : '--inspect') + `=${appConf.mainDebugPort}`,
        `--remote-debugging-port=${appConf.rendererDebugPort}`
      ],
      {
        stdio: 'inherit'
      }
    )
    app.on('close', () => {
      console.log(chalk.red.bold('[App] stopped'))
      wds.close()
    })
  })
})()

function greeting() {
  const cols = process.stdout.columns
  let text

  if (cols > 85) text = 'develop-mode'
  else if (cols > 60) text = 'develop|mode'
  else text = false

  if (text) {
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false
    })
  } else console.log(chalk.yellow.bold('\n  develop-mode'))
  console.log()
}
