import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'

const routes = [
  {
    path: '/',
    component: LandingPage,
    name: 'LandingPage'
  }
]

// eslint-disable-next-line import/prefer-default-export
export const router = createRouter({
  history: createWebHistory(),
  routes
})
