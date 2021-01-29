<template>
  <div>
    <TCPListener></TCPListener>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TCPListener from './components/TCPListener.vue'

export default defineComponent({
  name: 'App',
  components: {
    TCPListener
  }
})
</script>

<style></style>
