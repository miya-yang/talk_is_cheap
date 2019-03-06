import {
  remote
} from 'electron'

const events = {
  handleLoginEvent () {
    const currWin = remote.getCurrentWindow()
    currWin.setSize(750, 600)
    currWin.center()
    currWin.setAlwaysOnTop(false)
    currWin.setResizable(true)
    currWin.setMinimumSize(750, 600)
  }
}

export default events
