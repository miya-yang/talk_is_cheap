const state = {
  refreshFriendsList: false,
  refreshGroupsList: false
}

const mutations = {
  REFRESH_FRIENDS_LIST (state) {
    state.refreshFriendsList = !state.refreshFriendsList
  },
  REFRESH_GROUPS_LIST (state) {
    state.refreshGroupsList = !state.refreshGroupsList
  }
}

const actions = {
  changeFriendsListFlag ({ commit }) {
    commit('REFRESH_FRIENDS_LIST')
  },
  changeGroupsListFlag ({ commit }) {
    commit('REFRESH_GROUPS_LIST')
  }
}

const getters = {
  refreshFriendsFlag (state) {
    return state.refreshFriendsList
  },
  refreshGroupsFlag (state) {
    return state.refreshGroupsList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
