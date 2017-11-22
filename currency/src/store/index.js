import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'

Vue.use(Vuex)

const state = {
  currency: []
}

const mutations = {
  'INIT_DATA' (state) {
    axios.get('?limit=10')
      .then(response => {
        state.currency = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const actions = {
  getData ({ commit }) {
    commit('INIT_DATA')
  }
}

const getters = {
  getCurrency (state) {
    return state.currency
  },
  getCurrencySelected (state, payload) {
    return (payload) => {
      return state.currency.find(el => el.id === payload)
    }
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
