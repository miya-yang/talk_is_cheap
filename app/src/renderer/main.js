import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import { Button, Icon, Input, Avatar, Split, Form, FormItem, Card, CellGroup, Cell, Upload, DatePicker, RadioGroup, Radio, Select, Option, Message } from 'iview'
import 'iview/dist/styles/iview.css'
import Mock from './mock'

Vue.use(Mock)

Vue.component('Button', Button)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('Avatar', Avatar)
Vue.component('Split', Split)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Card', Card)
Vue.component('CellGroup', CellGroup)
Vue.component('Cell', Cell)
Vue.component('Upload', Upload)
Vue.component('DatePicker', DatePicker)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Radio', Radio)
Vue.component('Select', Select)
Vue.component('Option', Option)

Vue.prototype.$Message = Message

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// 统一进行错误处理
axios.interceptors.response.use((response) => {
  if (response.data.code !== 0) {
    Message.error(response.data.message)
  } else {
    return Promise.resolve(response.data)
  }
}, (error) => {
  Message.error(error.message)
  return Promise.reject(error.response)
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
