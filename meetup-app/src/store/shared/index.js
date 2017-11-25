const state = {
  loading: false,
  authenticationError: {}
}

const mutations = {
  'SET_LOADING' (state, payload) {
    state.loading = payload
  },
  'SET_ERROR' (state, payload) {
    state.authenticationError = payload
  },
  'CLEAR_ERROR' (state) {
    state.authenticationError = {}
  }
}

const actions = {
  resetError ({ commit }) {
    commit('CLEAR_ERROR')
  }
}

const getters = {
  getError (state) {
    return state.authenticationError
  },
  getLoading (state) {
    return state.loading
  }
}

const store = {
  state,
  mutations,
  actions,
  getters
}

export default store
