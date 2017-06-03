// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import store from '../src/store/store'
import { firebaseApp } from '../src/data/firebase'

Vue.config.productionTip = false

Vue.use(VueFire)

// CHECK USER
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push({ name: 'Dashboard' })
  } else {
    router.replace({ name: 'Signin' })
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
