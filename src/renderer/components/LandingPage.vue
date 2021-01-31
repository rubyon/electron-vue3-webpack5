<template>
  <div id="app">
    <div>
      <img id="logo" src="~@/assets/logo.png" alt="electron-vue" width="400" />
    </div>
    <div class="text">{{ greeting }} Webpack 5</div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      greeting: 'Electron VueJS3'
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
}

.text {
  margin-top: 10px;
  font-size: 48px;
  font-weight: bold;
  font-family: Arial;
  color: #26a69a;
}
</style>
