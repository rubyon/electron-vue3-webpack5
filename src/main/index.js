import { app, BrowserWindow } from 'electron'

async function createWindow () {
  const mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  mainWindow.webContents.on('new-window', e => e.preventDefault())
  mainWindow.removeMenu()
  if (!app.isPackaged) { mainWindow.webContents.openDevTools({ mode: 'right' }) }

  if (app.isPackaged) {
    await mainWindow.loadFile('./index.html')
  } else {
    // eslint-disable-next-line no-undef
    await mainWindow.loadURL(`http://localhost:${WDS_PORT}`)
  }
  mainWindow.show()
}

app.on('window-all-closed', () => {
  app.quit()
  // if (process.platform !== 'darwin') {
  //     app.quit()
  // }
})

app.on('ready', () => {
  createWindow().then()
  if (!app.isPackaged) {
    const installExtension = require('electron-devtools-installer')
    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then(() => {})
      .catch(err => {
        console.log('Unable to install `vue-devtools`: \n', err)
      })
  }
})
