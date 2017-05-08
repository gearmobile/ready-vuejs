import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Add from '@/components/add'
import View from '@/components/view'
import Edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/view/:key',
      name: 'View',
      component: View
    },
    {
      path: '/view/edit/:key',
      name: 'Edit',
      component: Edit
    }
  ]
})
