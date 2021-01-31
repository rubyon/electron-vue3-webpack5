<template>
  <div class="container">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue" height="64" />

    <div class="mb-3">
      <label for="socket-textarea" class="form-label">
        Socket.io TCP Server Sample
      </label>
      <textarea
        id="socket-textarea"
        v-model="textarea"
        style="font-size: 20pt"
        disabled
        class="form-control"
        rows="8"
      />
    </div>
    <div class="input-group mb-3">
      <input
        v-model="message"
        type="text"
        class="form-control"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        @keyup.enter="sendMessage()"
      />
      <button
        id="button-addon2"
        class="btn btn-success"
        type="button"
        @click="sendMessage()"
      >
        Button
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocketIO',
  data() {
    return {
      textarea: '',
      message: '',
      todos: [{ text: 'Vue.js' }, { text: 'Electron' }, { text: 'Ruby' }]
    }
  },
  created() {
    this.$socket.on('chat', (data) => {
      // this.todos.push({text: data.message})
      this.textarea += `${data.message}\n`
      const textarea = document.getElementById('socket-textarea')
      setInterval(() => {
        textarea.scrollTop = textarea.scrollHeight
      }, 1000)
    })
  },
  methods: {
    sendMessage() {
      this.$socket.emit('chat', {
        message: this.message
      })
      this.textarea += `${this.message}\n`
      // this.todos.push({text: this.message})
      this.message = ''
      const textarea = document.getElementById('socket-textarea')
      setInterval(() => {
        textarea.scrollTop = textarea.scrollHeight
      }, 1000)
    }
  }
}
</script>
