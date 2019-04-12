'use strict'

import {
  app,
  ipcMain
} from 'electron'

ipcMain.on('poke', (event, arg) => {
  app.show()
})
