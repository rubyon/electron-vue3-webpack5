import { app, BrowserWindow, globalShortcut, Menu } from 'electron'

// Mac App menu - used for styling so shortcuts work
if (process.platform === 'darwin') {
  // Create our menu entries so that we can use MAC shortcuts
  const template = [
    {
      label: '',
      submenu: [{ role: 'about' }, { role: 'quit' }]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'Development',
      submenu: [
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

let isRunning = false

async function createWindow() {
  const mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  mainWindow.webContents.on('new-window', (e) => e.preventDefault())
  mainWindow.removeMenu()

  if (app.isPackaged) {
    await mainWindow.loadFile('./index.html')
  } else {
    // eslint-disable-next-line no-undef
    await mainWindow.loadURL(`http://localhost:${WDS_PORT}`)
    mainWindow.webContents.openDevTools({ mode: 'right' })
  }
  isRunning = true
  mainWindow.show()
}

app.on('window-all-closed', () => {
  isRunning = false
  // app.quit()
  if (process.platform !== 'darwin') {
    app.quit()
    isRunning = false
  }
})

app.on('ready', createWindow)

app.on('activate', () => {
  if (isRunning === false) {
    createWindow()
    isRunning = true
  }
})

app.on('browser-window-focus', () => {
  globalShortcut.register('CommandOrControl+R', () => {
    console.log('Electron loves global shortcuts!')
  })
  globalShortcut.register('CommandOrControl+Shift+R', () => {
    console.log('Electron loves global shortcuts!')
  })
  globalShortcut.register('F5', () => {
    console.log('Electron loves global shortcuts!')
  })
})

app.on('browser-window-blur', () => {
  globalShortcut.unregisterAll()
})
