<template lang="pug">
  #app.container
    .row
      .col-md-12
        router-view
</template>

<script>
  export default {
    name: 'app'
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
