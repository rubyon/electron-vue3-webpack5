<template>
  <div id="app">
    <div>
      <img
        id="logo"
        src="~@/assets/logo.png"
        alt="electron-vue"
        width="400px"
      />
    </div>
    <div class="text">{{ greeting }} Webpack 5</div>
  </div>
</template>

<script>
  export default {
    name: 'LandingPage',
    data: function () {
      return {
        greeting: 'Electron VueJS'
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
