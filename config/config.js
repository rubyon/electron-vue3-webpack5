const { name } = require('../package.json')

module.exports = {
  appName: name,
  wdsPort: 8080,

  // source map
  devSourceMap: 'source-map',
  prodSourceMap: false,

  // debug
  mainDebugPort: 9000,
  rendererDebugPort: 9001,
  pauseAtStart: false
}
