<template>
  <div>
    <LandingPage></LandingPage>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LandingPage from './components/LandingPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    LandingPage
  }
})
</script>

<style></style>
