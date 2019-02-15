import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register-page',
      component: Register
    }
  ]
})
