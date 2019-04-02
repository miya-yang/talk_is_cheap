import Vue from 'vue'
import Router from 'vue-router'

import MainBaseFrame from '@/pages/MainPages/BaseFrame'

import LoginPage from '@/pages/LoginPages/Login'

import MessagePage from '@/pages/MainPages/MessagePage'
import FriendsPage from '@/pages/MainPages/FriendsPage'
import MomentsPage from '@/pages/MainPages/MomentsPage'
import ActivityPage from '@/pages/MainPages/ActivityPage'
import CirclePage from '@/pages/MainPages/CirclePage'
import MatchPage from '@/pages/MainPages/MatchPage'
import RankingPage from '@/pages/MainPages/RankingPage'

import AddFriendsPage from '@/pages/MainPages/FriendsPages/AddFriendsPage'
import ApplicationFriendsPage from '@/pages/MainPages/FriendsPages/ApplicationFriendsPage'
import FriendsInfoPage from '@/pages/MainPages/FriendsPages/FriendsInfoPage'

import NewMomentsPage from '@/pages/MainPages/MomentsPages/NewMomentsPage'
import MomentsListPage from '@/pages/MainPages/MomentsPages/MomentsListPage'

import UserInfoWindow from '@/pages/MainPages/ChildWindows/UserInfoWindow'
import ReportWindow from '@/pages/MainPages/ChildWindows/ReportWindow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
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
          component: FriendsPage,
          children: [
            {
              path: '/add-friends',
              name: 'add-friends-page',
              component: AddFriendsPage
            },
            {
              path: '/application-friends',
              name: 'application-friends-page',
              component: ApplicationFriendsPage
            },
            {
              path: '/friends-info/:id',
              name: 'friends-info-page',
              component: FriendsInfoPage
            }
          ]
        },
        {
          path: '/moments',
          name: 'moments-page',
          component: MomentsPage,
          children: [
            {
              path: '/new-moments',
              name: 'new-moments-page',
              component: NewMomentsPage
            },
            {
              path: '/moments-list',
              name: 'moments-list-page',
              component: MomentsListPage
            }
          ]
        },
        {
          path: '/activity',
          name: 'activity-page',
          component: ActivityPage
        },
        {
          path: '/circle',
          name: 'circle-page',
          component: CirclePage
        },
        {
          path: '/match',
          name: 'match-page',
          component: MatchPage
        },
        {
          path: '/ranking',
          name: 'ranking-page',
          component: RankingPage
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
