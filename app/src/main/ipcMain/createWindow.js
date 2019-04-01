'use strict'

import {
  BrowserWindow,
  ipcMain
} from 'electron'

function createUserInfoWindow () {
  if (!global.__onlyWindow.userInfo) {
    let userInfoWindow = new BrowserWindow({
      height: 480,
      width: 330,
      useContentSize: true,
      title: '个人资料',
      center: true,
      frame: false,
      alwaysOnTop: true,
      resizable: false,
      maximizable: false,
      fullscreenable: false,
      transparent: true,
      show: true
    })
    userInfoWindow.loadURL(`${global.__winURL}/#/window/userInfo`)
    global.__onlyWindow.userInfo = true
    userInfoWindow.on('closed', () => {
      userInfoWindow = null
      global.__onlyWindow.userInfo = false
    })
    userInfoWindow.show()
  }
}

function createReportWindow () {
  if (!global.__onlyWindow.report) {
    let reportWindow = new BrowserWindow({
      height: 500,
      width: 500,
      useContentSize: true,
      title: '举报系统',
      center: true,
      frame: false,
      alwaysOnTop: true,
      resizable: false,
      maximizable: false,
      fullscreenable: false,
      transparent: true,
      show: true
    })
    reportWindow.loadURL(`${global.__winURL}/#/window/report`)
    global.__onlyWindow.report = true

    reportWindow.on('closed', () => {
      reportWindow = null
      global.__onlyWindow.report = false
    })
    reportWindow.show()
  }
}

ipcMain.on('createWindow', (event, arg) => {
  switch (arg) {
    case 'UserInfoWindow':
      createUserInfoWindow()
      break
    case 'ReportWindow':
      createReportWindow()
      break
    default:
      break
  }
})
