import Loading from './Loading.vue'

let instance = null

export default {
  install (Vue, options) {
    if (!instance) {
      let Component = Vue.extend(Loading)
      instance = new Component({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }
    instance.isShow = false

    let customMethods = {
      show () {
        instance.isShow = true
      },
      hide () {
        instance.isShow = false
      }
    }

    if (!Vue.$Loading) {
      Vue.$Loading = customMethods
      Vue.prototype.$Loading = Vue.$Loading
    }
  }
}
