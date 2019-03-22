// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iview from 'iview'
import { Message, Steps, Step } from 'iview'
import axios from 'axios'
import qs from 'qs'
import 'iview/dist/styles/iview.css'
import '@/assets/scss/common.scss'

Vue.config.productionTip = false
// Vue.use(iview)
Vue.prototype.$http = axios

Vue.prototype.$Message = Message

Vue.component('Steps', Steps)
Vue.component('Step', Step)

axios.defaults.baseURL = 'http://tic.codergzw.com/'

// 统一进行请求处理
axios.interceptors.request.use((config) => {
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
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
