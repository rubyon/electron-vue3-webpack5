<template>
  <div>
    <SocketIO></SocketIO>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SocketIO from './components/SocketIO.vue'

export default defineComponent({
  name: 'App',
  components: {
    SocketIO
  }
})
</script>

<style></style>
