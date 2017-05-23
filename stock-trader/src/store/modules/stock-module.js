import datas from '../../data/data'

const state = {
  stocks: []
}

const getters = {
  getStocks (state) {
    return state.stocks
  }
}

const mutations = {
  'SET_STOCKS' (state, payload) {
    state.stocks = payload
  },
  'RANDOMIZE_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price += Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
}

const actions = {
  initStocks ({ commit }) {
    commit('SET_STOCKS', datas)
  },
  randomizeStocks ({ commit }) {
    commit('RANDOMIZE_STOCKS')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
