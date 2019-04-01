import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import { Button, Icon, Input, Avatar, Split, Form, FormItem, Card, CellGroup, Cell, Upload, DatePicker, RadioGroup, Radio, Select, Option, Message, Spin, Badge, Progress, Modal, Notice, CheckboxGroup, Checkbox } from 'iview'
import 'iview/dist/styles/iview.css'
import qs from 'qs'
import Loading from './plugins/Loading/index'
// import Mock from './mock'

// Vue.use(Mock)

Vue.use(Loading)

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
Vue.component('Spin', Spin)
Vue.component('Badge', Badge)
Vue.component('Progress', Progress)
Vue.component('Modal', Modal)
Vue.component('CheckboxGroup', CheckboxGroup)
Vue.component('Checkbox', Checkbox)

Vue.prototype.$Message = Message
Vue.prototype.$Notice = Notice
Vue.prototype.$qs = qs

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
axios.defaults.baseURL = 'http://tic.codergzw.com'
axios.defaults.withCredentials = true

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// 统一进行请求处理
axios.interceptors.request.use((config) => {
  Vue.$Loading.show()
  config.method === 'post'
    ? config.data = qs.stringify({...config.data})
    : config.params = {...config.params}
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, error => {
  Vue.$Message.error(error)
  Promise.reject(error)
})

// 统一进行错误处理
axios.interceptors.response.use((response) => {
  Vue.$Loading.hide()
  if (response.data.code !== 0) {
    Message.error(response.data.message)
    return Promise.reject(response)
  } else {
    return response.data
  }
}, (reject) => {
  Message.error('请求出现错误，请查看请求信息')
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
