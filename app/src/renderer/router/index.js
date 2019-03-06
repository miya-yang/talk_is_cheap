import Vue from 'vue'
import Router from 'vue-router'

import MainBaseFrame from '@/pages/MainPages/BaseFrame'

import LoginPage from '@/pages/LoginPages/Login'

import MessagePage from '@/pages/MainPages/MessagePages/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root-page',
      component: LoginPage
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/main',
      name: 'main-page',
      component: MainBaseFrame,
      children: [
        {
          path: '/message',
          name: 'message-page',
          component: MessagePage
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
