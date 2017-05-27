import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Brands from '@/components/brands'
import Contacts from '@/components/contacts'
import Projects from '@/components/projects'
import Blog from '@/components/blog'
import Post from '@/components/post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/brands',
      name: 'Brands',
      component: Brands
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    }
  ]
})
