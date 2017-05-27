<template lang="pug">
  #app
    app-nav
    router-view
</template>

<script>
  import Nav from './components/navigation.vue'

  export default {
    name: 'app',
    components: {
      appNav: Nav
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .section {
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__title {
      font-size: 6rem;
      color: black;
      text-transform: capitalize;
    }
  }
</style>
