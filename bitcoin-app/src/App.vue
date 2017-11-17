<template lang="pug">
  v-app( light )
    component-navigation
    router-view
</template>

<script>
  import NavBar from './partials/Navigation.vue'

  export default {
    components: {
      componentNavigation: NavBar
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
