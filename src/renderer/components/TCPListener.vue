<template>
  <div class="container">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue" height="64" />

    <div class="mb-3">
      <label for="tcp-textarea" class="form-label">
        TCP Listener Sample with Vue.js 3
      </label>
      <textarea
        id="tcp-textarea"
        v-model="textarea"
        style="font-size: 20pt"
        disabled
        class="form-control"
        rows="11"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TCPListener',
  data() {
    return {
      textarea: ''
    }
  },
  created() {
    const net = require('net')
    const server = new net.Server()
    server.on('connection', (client) => {
      client.on('data', (data) => {
        this.textarea += `${data.toString()}\n`
        console.log(`Server received data: ${data}`)
        const textarea = document.getElementById('tcp-textarea')
        setInterval(function () {
          textarea.scrollTop = textarea.scrollHeight
        }, 1000)
      })
    })
    server.listen(4000, '0.0.0.0')
  }
}
</script>
