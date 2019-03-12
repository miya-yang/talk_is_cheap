'use strict'

import {
  BrowserWindow,
  ipcMain
} from 'electron'

function createUserInfoWindow () {
  let userInfoWindow = new BrowserWindow({
    height: 480,
    width: 330,
    useContentSize: true,
    title: '个人资料',
    center: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    transparent: true,
    show: true
  })
  userInfoWindow.loadURL(`${global.__winURL}/#/window/userInfo`)
}

function createReportWindow () {
  let reportWindow = new BrowserWindow({
    height: 500,
    width: 500,
    useContentSize: true,
    title: '举报系统',
    center: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    transparent: true,
    show: true
  })
  reportWindow.loadURL(`${global.__winURL}/#/window/report`)
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
