import SocketIO from '@/plugins/Socket.io'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { router } from './router'

import App from './App.vue'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'

const app = createApp(App).use(router).use(SocketIO, {
  connection: 'http://localhost:3000',
  options: {}
})

app.mount('#app')
