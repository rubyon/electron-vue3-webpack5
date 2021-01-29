#! /bin/env node
const { say } = require('cfonts')
const chalk = require('chalk')
const del = require('del')

console.log(chalk.yellowBright.bold('[Webpack] deleting folder...'))

greeting()

del.sync(['build/*', 'dist/*'])

function greeting() {
  const cols = process.stdout.columns
  let text

  if (cols > 85) text = 'cleaning...'
  else text = false

  if (text) {
    say(text, {
      colors: ['red'],
      font: 'simple3d',
      space: false
    })
  } else console.log(chalk.red.bold('\n  cleaning...'))
  console.log()
}
