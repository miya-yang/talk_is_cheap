const state = {
  MoreMenu: false
}

const mutations = {
  SHOW_MORE_MENU (state) {
    state.MoreMenu = true
  },
  HIDE_MORE_MENU (state) {
    state.MoreMenu = false
  }
}

const actions = {
  showMoreMenu ({ commit }) {
    commit('SHOW_MORE_MENU')
  },
  hideMoreMenu ({ commit }) {
    commit('HIDE_MORE_MENU')
  }
}

const getters = {
  MoreMenu (state) {
    return state.MoreMenu
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
