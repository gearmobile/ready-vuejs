<template lang="pug">
  #app.container
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
