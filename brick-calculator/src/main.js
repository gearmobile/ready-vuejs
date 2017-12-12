// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import store from './store'
import colors from './utils/colors' // => color scheme
import { i18n } from './pluigns/vue-i18n'

Vue.use(Vuetify, {
  theme: {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    error: colors.error,
    info: colors.info,
    success: colors.success,
    warning: colors.warning,
    additional: colors.additional
  }
}
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  i18n,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch('getRUBRate')
  }
}).$mount('#app')
