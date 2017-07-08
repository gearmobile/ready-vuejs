<template lang="pug">
  #app
    router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script> 

<style lang="scss">
  body {
    height: 100vh;
    background-color: slategrey;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top: 6rem;
  }
</style>
