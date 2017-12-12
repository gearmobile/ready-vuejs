import Vue from 'vue'
import Vuex from 'vuex'

import meetup from './meetup'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    meetup,
    user,
    shared
  }
})

export default store
