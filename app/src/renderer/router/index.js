import Vue from 'vue'
import Router from 'vue-router'

import MainBaseFrame from '@/pages/MainPages/BaseFrame'

import LoginPage from '@/pages/LoginPages/Login'

import MessagePage from '@/pages/MainPages/MessagePage'
import FriendsPage from '@/pages/MainPages/FriendsPage'
import MomentsPage from '@/pages/MainPages/MomentsPage'

import UserInfoWindow from '@/pages/MainPages/ChildWindows/UserInfoWindow'
import ReportWindow from '@/pages/MainPages/ChildWindows/ReportWindow'

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
        },
        {
          path: '/friends',
          name: 'friends-page',
          component: FriendsPage
        },
        {
          path: '/moments',
          name: 'moments-page',
          component: MomentsPage
        }
      ]
    },
    {
      path: '/window/userinfo',
      name: 'userinfo-window',
      component: UserInfoWindow
    },
    {
      path: '/window/report',
      name: 'report-window',
      component: ReportWindow
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
