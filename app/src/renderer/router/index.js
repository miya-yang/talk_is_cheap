import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/pages/LoginPages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
