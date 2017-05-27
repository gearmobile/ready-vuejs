<template lang="pug">
  section.section.home
    h2.section__title {{ msg }}
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Simple SPA'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    background-color: rgba( 242, 199, 48, 1 );
  }
</style>
