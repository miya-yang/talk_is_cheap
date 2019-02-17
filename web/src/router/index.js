import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/Register'
import RegisterSuccess from '@/pages/Register-success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register-page',
      component: Register
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: RegisterSuccess
    }
  ]
})
