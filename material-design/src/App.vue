<template lang="pug">
  #app
    appPrimo
  </div>
</template>

<script>
  import Primo from './components/primo.vue'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 60px 30px 0 30px;
  }
</style>
