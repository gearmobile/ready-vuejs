import Vue from 'vue'
import router from './router'
import store from './store/'

import {
  Vuetify,
  VApp,
  VBtn,
  VIcon,
  VDataTable,
  VToolbar,
  VCard,
  VGrid
} from 'vuetify'

import App from './App.vue'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VIcon,
    VDataTable,
    VToolbar,
    VCard,
    VGrid
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.dispatch('getData')
  }
}).$mount('#app')
