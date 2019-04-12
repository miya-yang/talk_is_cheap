import {
  remote, ipcRenderer
} from 'electron'

const events = {
  /**
   * 成功登录后回调函数执行
   * @description 登录账号成功后执行，对窗体属性进行操作
   */
  hLoginEvent () {
    const currWin = remote.getCurrentWindow()
    currWin.setSize(750, 600)
    currWin.center()
    currWin.setAlwaysOnTop(false)
    currWin.setResizable(true)
    currWin.setMinimumSize(750, 600)
  },
  /**
   * 创建新的窗体
   * @description 与主线程通信，创建新的窗体
   * @param { String } name 创建窗体名称
   */
  hCreateWindow (name) {
    ipcRenderer.send(`createWindow`, name)
  },
  /**
   * 操作窗体
   * @param { String } operator 操作名称
   */
  hWindowControl ({ name, isMain, windowName }) {
    ipcRenderer.send(`controlWindow`, { name, isMain, windowName })
  },
  /**
   * 戳一戳功能
   */
  poke () {
    console.log('戳一戳触发')
    ipcRenderer.send(`poke`)
  }
}

export default events
