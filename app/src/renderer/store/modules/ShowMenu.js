const state = {
  MoreMenu: false,
  ChatRightHandMenu: {
    display: false,
    x: 0,
    y: 0
  },
  test: {
    display: false
  }
}

const mutations = {
  SHOW_MORE_MENU (state) {
    state.MoreMenu = true
  },
  HIDE_MORE_MENU (state) {
    state.MoreMenu = false
  },
  SHOW_CHAT_RIGHT_HAND_MENU (state, { mouseX, mouseY }) {
    state.ChatRightHandMenu = {
      display: true,
      mouseX,
      mouseY
    }
  },
  HIDE_CHAT_RIGHT_HAND_MENU (state) {
    state.ChatRightHandMenu.display = false
  }
}

const actions = {
  showMoreMenu ({ commit }) {
    commit('SHOW_MORE_MENU')
  },
  hideMoreMenu ({ commit }) {
    commit('HIDE_MORE_MENU')
  },
  showChatRightHandMenu ({ commit }, { mouseX, mouseY }) {
    commit('SHOW_CHAT_RIGHT_HAND_MENU', { mouseX, mouseY })
  },
  hideChatRightHandMenu ({ commit }) {
    commit('HIDE_CHAT_RIGHT_HAND_MENU')
  }
}

const getters = {
  MoreMenu (state) {
    return state.MoreMenu
  },
  ChatRightHandMenu (state) {
    return state.ChatRightHandMenu
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
