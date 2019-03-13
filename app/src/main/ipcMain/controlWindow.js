'use strict'

import {
  app,
  BrowserWindow,
  ipcMain
} from 'electron'

let Bounds = {}
let isMax = false

function minWindow () {
  let win = BrowserWindow.getFocusedWindow()
  win.minimize()
}

function scaleWindow () {
  let win = BrowserWindow.getFocusedWindow()
  if (isMax) {
    console.log('win is max')
    console.log('Bounds:', Bounds)
    win.setBounds(Bounds)
  } else {
    Bounds = win.getBounds()
    win.maximize()
  }
  isMax = !isMax
}

function closeWindow (isMain, windowName) {
  if (isMain) {
    app.quit()
  } else {
    let win = BrowserWindow.getFocusedWindow()
    win.close()
  }
  switch (windowName) {
    case 'userInfo':
      global.__onlyWindow.userInfo = false
      break
    case 'report':
      global.__onlyWindow.report = false
      break
  }
}

ipcMain.on('controlWindow', (event, arg) => {
  switch (arg.name) {
    case 'min':
      minWindow()
      break
    case 'scale':
      scaleWindow()
      break
    case 'close':
      let param = arg.isMain
      let windowName = arg.windowName
      closeWindow(param, windowName)
      break
    default:
      break
  }
})
