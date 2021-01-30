const path = require('path')
const { spawn } = require('cross-spawn')
const webpack = require('webpack')

function absPath(p) {
  return path.resolve(__dirname, '..', p)
}

function shellDo(cmd, conf) {
  conf = conf || {}
  const env = conf.env || process.env

  const p = spawn.sync(cmd, {
    shell: true,
    stdio: 'inherit',
    env
  })
  if (p.status !== 0) {
    process.exit(p.status)
  }
}

async function webpackAsync(conf) {
  return new Promise((resolve) => {
    webpack(conf, (err, stats) => {
      resolve({ err, stats })
    })
  })
}

async function runWebpack(conf) {
  const statsConf = conf.stats || {}
  const { err, stats } = await webpackAsync(conf)
  if (err) {
    console.error(err.toString())
    process.exit(1)
  }
  console.log(`${stats.toString(statsConf)}\n`)
  if (stats.hasErrors()) {
    process.exit(1)
  }
}

module.exports = {
  absPath,
  shellDo,
  runWebpack
}
