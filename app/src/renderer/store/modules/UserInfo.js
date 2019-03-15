const state = {
  _id: '',
  _nickname: '',
  _account: '',
  _portrait: ''
}

const mutations = {
  SET_USER_ID (state, _id) {
    state._id = _id
  },
  SET_NICKNAME (state, _nickname) {
    state._nickname = _nickname
  },
  SET_ACCOUNT (state, _account) {
    state._account = _account
  },
  SET_PORTRAIT (state, _portrait) {
    state._portrait = _portrait
  }
}

const actions = {
  setUserId ({ commit }, _id) {
    commit('SET_USER_ID', _id)
  },
  setUserNickname ({ commit }, _nickname) {
    commit('SET_NICKNAME', _nickname)
  },
  setUserAccount ({ commit }, _account) {
    commit('SET_ACCOUNT', _account)
  },
  setUserPortrait ({ commit }, _portrait) {
    commit('SET_PORTRAIT', _portrait)
  }
}

const getters = {
  userId (state) {
    return state._id
  },
  userNickname (state) {
    return state._nickname
  },
  userAccount (state) {
    return state._account
  },
  userPortrait (state) {
    return state._portrait
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
