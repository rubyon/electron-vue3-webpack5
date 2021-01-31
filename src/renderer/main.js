import io from 'socket.io-client'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(require('bootstrap-vue/dist/bootstrap-vue.common.min'))

const socket = io('http://localhost:3000')
Vue.prototype.$socket = socket

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
