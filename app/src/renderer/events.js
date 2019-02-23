import {
  remote
} from 'electron'

const events = {
  handleLoginEvent () {
    const currWin = remote.getCurrentWindow()
    currWin.setSize(700, 600)
    currWin.center()
    currWin.setAlwaysOnTop(false)
  }
}

export default events
