import { createRouter, createWebHistory } from 'vue-router'
import TCPListener from '../components/TCPListener.vue'

const routes = [
  {
    path: '/',
    component: TCPListener,
    name: 'TCPListener'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
