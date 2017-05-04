// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)

const eventBus = new Vue()
export default eventBus

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
