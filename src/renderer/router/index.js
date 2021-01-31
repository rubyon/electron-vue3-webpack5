import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SocketIO',
      component: require('@/components/SocketIO').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
