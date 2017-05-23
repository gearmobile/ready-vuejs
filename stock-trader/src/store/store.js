import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import stocks from './modules/stock-module'
import portfolio from './modules/portfolio-module'
import * as actions from './actions'

const store = new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
})

export default store
