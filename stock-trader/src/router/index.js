import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Portfolio from '@/components/portfolio/portfolioPage.vue'
import Stock from '@/components/stock/stockPage.vue'
import About from '@/components/about/aboutPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
