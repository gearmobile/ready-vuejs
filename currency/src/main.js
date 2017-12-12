// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App'
import '@/plugins/vuex-router-sync'
import '../node_modules/vuetify/src/stylus/app.styl'

import {
  Vuetify,
  VApp,
  VBtn,
  VIcon,
  VGrid,
  VCard,
  VDataTable,
  VToolbar,
  transitions
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VBtn,
    VIcon,
    VGrid,
    VCard,
    VDataTable,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82b1ff',
    error: '#ff5252',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ffc107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  created () {
    this.$store.dispatch('getData')
  },
  template: '<App/>',
  components: { App }
}).$mount('#app')
