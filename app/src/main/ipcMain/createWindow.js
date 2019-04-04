'use strict'

import {
  BrowserWindow,
  ipcMain
} from 'electron'

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

let __onlyWindow = {
  userInfo: false,
  report: false
}

let userInfoWindow
let reportWindow

function createUserInfoWindow () {
  if (!__onlyWindow.userInfo) {
    userInfoWindow = new BrowserWindow({
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

    userInfoWindow.loadURL(`${winURL}#/window/userInfo`)
    __onlyWindow.userInfo = true
    userInfoWindow.on('closed', () => {
      userInfoWindow = null
      __onlyWindow.userInfo = false
    })
    userInfoWindow.show()
  }
}

function createReportWindow () {
  if (!__onlyWindow.report) {
    reportWindow = new BrowserWindow({
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
    reportWindow.loadURL(`${winURL}#/window/report`)
    __onlyWindow.report = true

    reportWindow.on('closed', () => {
      reportWindow = null
      __onlyWindow.report = false
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
