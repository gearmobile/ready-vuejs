import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import List from '../pages/List.vue'
import Coin from '../pages/Coin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/list',
    component: List,
    name: 'List',
  },
  {
    path: '/list/:id',
    component: Coin,
    name: 'Coin',
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
