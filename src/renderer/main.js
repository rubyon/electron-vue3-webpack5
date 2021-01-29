import Vue from 'vue'
import App from './App.vue'
import router from './router'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
