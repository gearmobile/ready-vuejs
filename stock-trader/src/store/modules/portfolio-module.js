const state = {
  portfolioStocks: [],
  funds: 10000
}

const mutations = {
  'BUY_STOCKS' (state, payload) {
    const record = state.portfolioStocks.find(element => element.name === payload.name)
    if (record) {
      record.quantity += payload.quantity
    } else {
      state.portfolioStocks.push({
        id: payload.id,
        name: payload.name,
        quantity: payload.quantity
      })
    }
    state.funds -= payload.price * payload.quantity
  },
  'SELL_STOCKS' (state, payload) {
    const record = state.portfolioStocks.find(element => element.name === payload.name)
    if (record.quantity > payload.quantity) {
      record.quantity -= payload.quantity
    } else {
      state.portfolioStocks.splice(state.portfolioStocks.indexOf(payload), 1)
    }
    state.funds += payload.price * payload.quantity
  },
  'SET_PORTFOLIO' (state, payload) {
    state.portfolioStocks = payload.stocks
    state.funds = payload.funds ? payload.funds : []
  }
}

const actions = {
  buyStocks ({ commit }, payload) {
    commit('BUY_STOCKS', payload)
  },
  sellStocks ({ commit }, payload) {
    commit('SELL_STOCKS', payload)
  }
}

const getters = {
  getPortfolioStocks (state, getters) {
    const currentStocks = state.portfolioStocks
    const originalStocks = getters.getStocks
    return currentStocks.map(el => {
      const object = originalStocks.find(item => item.id === el.id)
      return {
        id: el.id,
        name: el.name,
        quantity: el.quantity,
        price: object.price
      }
    })
  },
  getFunds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
