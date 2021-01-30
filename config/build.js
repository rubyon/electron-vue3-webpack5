#! /bin/env node
const { say } = require('cfonts')
const chalk = require('chalk')

const { shellDo, runWebpack } = require('./utils')

greeting()

function buildElectron() {
  const env = { ...process.env }

  console.log(chalk.yellow.bold('[ElectronBuilder] building electron...'))
  shellDo('electron-builder', { env })
}

;(async () => {
  console.log(chalk.blue.bold('[Webpack] compiling for main...'))
  await runWebpack(require('./webpack.prod.main.config'))

  console.log(chalk.blue.bold('[Webpack] compiling for renderer...'))
  await runWebpack(require('./webpack.prod.renderer.config'))

  buildElectron()
})()

function greeting() {
  const cols = process.stdout.columns
  let text

  if (cols > 85) text = 'Building...'
  else text = false

  if (text) {
    say(text, {
      colors: ['cyanBright'],
      font: 'simple3d',
      space: false
    })
  } else console.log(chalk.cyanBright.bold('\n  Building...'))
  console.log()
}
