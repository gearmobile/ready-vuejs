<template lang="pug">
  #app.container
    .row
      .col-md-8.col-md-offset-2
        figure.logo
          img.logo__image( src="./assets/full-sc.jpg" )
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

    & .logo__image {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
</style>
