import Vue from 'vue'
import Router from 'vue-router'

import RegisterPage from '@/pages/register'
import RegisterIndexPage from '@/pages/register/index'
import RegisterSuccessPage from '@/pages/register/success'

import ForgetPage from '@/pages/forget'
import ForgetPageStep1 from '@/pages/forget/step1'
import ForgetPageStep2 from '@/pages/forget/step2'
import ForgetPageStep3 from '@/pages/forget/step3'
import ForgetPageStep4 from '@/pages/forget/step4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register-page',
      component: RegisterPage,
      children: [
        {
          path: '',
          name: 'register-index',
          component: RegisterIndexPage
        },
        {
          path: 'success',
          name: 'register-success',
          component: RegisterSuccessPage
        }
      ]
    },
    {
      path: '/forget',
      name: 'forget-page',
      component: ForgetPage,
      children: [
        {
          path: '',
          name: 'forget-step1',
          component: ForgetPageStep1
        },
        {
          path: 'step1',
          name: 'forget-step1',
          component: ForgetPageStep1
        },
        {
          path: 'step2',
          name: 'forget-step2',
          component: ForgetPageStep2
        },
        {
          path: 'step3',
          name: 'forget-step3',
          component: ForgetPageStep3
        },
        {
          path: 'step4',
          name: 'forget-step4',
          component: ForgetPageStep4
        }
      ]
    }
  ]
})
