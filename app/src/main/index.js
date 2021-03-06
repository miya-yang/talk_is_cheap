'use strict'

import {
  app,
  BrowserWindow
} from 'electron'

import '../renderer/store'

global.__onlyWindow = {
  userInfo: false,
  report: false
}

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`
global.__winURL = winURL

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 330,
    width: 430,
    useContentSize: true,
    title: 'Talk Is Cheap',
    frame: false,
    center: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    alwaysOnTop: true,
    transparent: true,
    show: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  global.__mainWindow = mainWindow
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

require('./ipcMain/createWindow')
require('./ipcMain/controlWindow')
require('./ipcMain/message')
