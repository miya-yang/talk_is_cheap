'use strict'

import {
  BrowserWindow,
  ipcMain
} from 'electron'

function createUserInfoWindow () {
  console.log('createPortraitWindow function start...')
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
  console.log(`${global.__winURL}/window/userinfo`)
  let browserArr = BrowserWindow.getAllWindows()
  console.log('userinfoWindow id: ', userInfoWindow)
  console.log('browserArr: ', browserArr)
}

ipcMain.on('createUserInfoWindow', (event, arg) => {
  console.log('ipcMain: createUserInfoWindow start..')
  createUserInfoWindow()
  console.log('ipcMain: createUserInfoWindow complete')
})
