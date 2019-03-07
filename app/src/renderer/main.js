import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import { Button, Icon, Input, Avatar } from 'iview'
import 'iview/dist/styles/iview.css'

Vue.component('Button', Button)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('Avatar', Avatar)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
