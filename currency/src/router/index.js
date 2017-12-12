import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* Home Page */ '@/pages/HomePage')
const List = () => import(/* List Page */ '@/pages/ListPage')
const Coin = () => import(/* Coin Page */ '@/pages/CoinPage')

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/list/:id',
    name: 'Coin',
    component: Coin,
    props: true
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
