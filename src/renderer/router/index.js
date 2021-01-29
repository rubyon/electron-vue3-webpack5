import { createRouter, createWebHistory } from 'vue-router'
import SocketIO from '../components/SocketIO.vue'

const routes = [
  {
    path: '/',
    component: SocketIO,
    name: 'SocketIO'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
