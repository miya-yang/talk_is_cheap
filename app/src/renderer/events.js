import {
  remote, ipcRenderer
} from 'electron'

const events = {
  /**
   * 成功登录后回调函数执行
   * @description 登录账号成功后执行，对窗体属性进行操作
   */
  handleLoginEvent () {
    const currWin = remote.getCurrentWindow()
    currWin.setSize(750, 600)
    currWin.center()
    currWin.setAlwaysOnTop(false)
    currWin.setResizable(true)
    currWin.setMinimumSize(750, 600)
  },
  handleCreateUserInfoWindow () {
    ipcRenderer.send('createUserInfoWindow')
  }
}

export default events
