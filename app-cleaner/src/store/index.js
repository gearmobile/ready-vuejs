import Vue from 'vue'
import Vuex from 'vuex'

import main from './modules/main/index'
import promotion from './modules/promotion/index'
import discount from './modules/discount/index'
import promocode from './modules/promocode/index'
import result from './modules/result/index'
import order from './modules/order/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    main,
    promotion,
    discount,
    promocode,
    result,
    order
  }
})

export default store
