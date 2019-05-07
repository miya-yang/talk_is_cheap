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

import ChatPage from '@/pages/MainPages/MessagePages/ChatPage'

import AddFriendsPage from '@/pages/MainPages/FriendsPages/AddFriendsPage'
import ApplicationFriendsPage from '@/pages/MainPages/FriendsPages/ApplicationFriendsPage'
import FriendsInfoPage from '@/pages/MainPages/FriendsPages/FriendsInfoPage'
import CreateGroupPage from '@/pages/MainPages/FriendsPages/CreateGroupPage'

import NewMomentsPage from '@/pages/MainPages/MomentsPages/NewMomentsPage'
import MomentsListPage from '@/pages/MainPages/MomentsPages/MomentsListPage'

import MatchResultPage from '@/pages/MainPages/MatchPages/MatchResultPage'
import DirectionMatchPage from '@/pages/MainPages/MatchPages/DirectionMatchPage'

import AllCirclePage from '@/pages/MainPages/CirclePages/AllCirclePage'
import NewCirclePage from '@/pages/MainPages/CirclePages/NewCirclePage'
import MyFansPage from '@/pages/MainPages/CirclePages/MyFansPage'
import MyFollowPage from '@/pages/MainPages/CirclePages/MyFollowPage'

import AllActivityPage from '@/pages/MainPages/ActivityPages/AllActivityPage'
import InitiatingActivityPage from '@/pages/MainPages/ActivityPages/InitiatingActivityPage'
import JoinActivityPage from '@/pages/MainPages/ActivityPages/JoinActivityPage'
import NewActivityPage from '@/pages/MainPages/ActivityPages/NewActivityPage'

import RankingPanelPage from '@/pages/MainPages/RankingPages/RankingPanelPage'

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
          path: '/message/',
          name: 'message-page',
          component: MessagePage,
          children: [
            {
              path: '/chat/:id/:isGroup',
              name: 'message-chat-page',
              component: ChatPage
            }
          ]
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
            },
            {
              path: '/create-group',
              name: 'friends-create-group-page',
              component: CreateGroupPage
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
          component: ActivityPage,
          children: [
            {
              path: '/all-activity',
              name: 'all-activity-page',
              component: AllActivityPage
            },
            {
              path: '/initiating-activity',
              name: 'initiating-activity-page',
              component: InitiatingActivityPage
            },
            {
              path: '/join-activity',
              name: 'join-activity-page',
              component: JoinActivityPage
            },
            {
              path: '/new-activity',
              name: 'new-activity-page',
              component: NewActivityPage
            }
          ]
        },
        {
          path: '/circle',
          name: 'circle-page',
          component: CirclePage,
          children: [
            {
              path: '/all-circle',
              name: 'all-circle-page',
              component: AllCirclePage
            },
            {
              path: '/new-circle',
              name: 'new-circle-page',
              component: NewCirclePage
            },
            {
              path: '/my-fans',
              name: 'circle-fans-page',
              component: MyFansPage
            },
            {
              path: '/my-follow',
              name: 'circle-follow-page',
              component: MyFollowPage
            }
          ]
        },
        {
          path: '/match',
          name: 'match-page',
          component: MatchPage,
          children: [
            {
              path: '/match-result',
              name: 'match-result-page',
              component: MatchResultPage
            },
            {
              path: '/direction-match',
              name: 'direction-match-page',
              component: DirectionMatchPage
            }
          ]
        },
        {
          path: '/ranking',
          name: 'ranking-page',
          component: RankingPage,
          children: [
            {
              path: '/ranking-panel-page/:type',
              name: 'ranking-panel-page',
              component: RankingPanelPage
            }
          ]
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
