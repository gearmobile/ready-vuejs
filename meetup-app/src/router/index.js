import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Start.vue')
const MeetupList = () => import('@/components/Meetup/MeetupList.vue')
const MeetupNew = () => import('@/components/Meetup/MeetupNew.vue')
const MeetupDetails = () => import('@/components/Meetup/MeetupDetails.vue')
const SignUp = () => import('@/components/User/SignUp.vue')
const SignIn = () => import('@/components/User/SignIn.vue')
const Profile = () => import('@/components/User/Profile.vue')
import { signIn as Login, signUp as Register } from './auth-guard'

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
      path: '/meetuplist',
      name: 'MeetupList',
      component: MeetupList,
      beforeEnter: Register
    },
    {
      path: '/meetupnew',
      name: 'MeetupNew',
      component: MeetupNew,
      beforeEnter: Login
    },
    {
      path: '/meetupdetails/:id',
      name: 'MeetupDetails',
      props: true,
      component: MeetupDetails
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
