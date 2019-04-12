const state = {
  _chatToId: '',
  _chatIsGroup: '',
  _chatGroupCount: 0
}

const mutations = {
  SET_CHATTOID (state, _chatToId) {
    state._chatToId = _chatToId
  },
  SET_CHATISGROUP (state, _chatIsGroup) {
    state._chatIsGroup = _chatIsGroup
  },
  SET_CHATGROUPCOUNT (state, _chatGroupCount) {
    state._chatGroupCount = _chatGroupCount
  }
}

const actions = {
  setChatInfo ({ commit }, { _chatToId, _chatIsGroup }) {
    commit('SET_CHATTOID', _chatToId)
    commit('SET_CHATISGROUP', _chatIsGroup)
  }
}

const getters = {
  userChatToId (state) {
    return state._chatToId
  },
  userChatIsGroup (state) {
    return state._chatIsGroup
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
