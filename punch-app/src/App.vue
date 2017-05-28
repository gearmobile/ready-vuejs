<template lang="pug">
  .container
    .row
      .col-md-12
        h1.page-header.text-center.text-capitalize
          | little punch game
    .row
      .col-md-12
        app-home
</template>

<script>
import Home from './components/home'

export default {
  name: 'app',
  components: {
    appHome: Home
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
