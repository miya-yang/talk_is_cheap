import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/pages/LoginPages/Login'
import MessagePage from '@/pages/MainPages/Message'

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
      component: MessagePage,
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
