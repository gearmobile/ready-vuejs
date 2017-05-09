import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/movies'
import Details from '@/components/movieDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    }
  ]
})
