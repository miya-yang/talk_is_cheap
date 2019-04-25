'use strict'

import {
  ipcMain
} from 'electron'

ipcMain.on('poke', (event, arg) => {
  const mainWindow = global.__mainWindow
  mainWindow.focus()
})
