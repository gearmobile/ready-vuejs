// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import 'animate.css'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = 'https://my-project-1470326292008.firebaseio.com/'

Vue.filter('divider', (value) => {
  return '$' + parseInt(value).toLocaleString('ru-RU')
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
