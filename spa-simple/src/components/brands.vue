<template lang="pug">
  section.section.brands
    h2.section__title {{ msg }}
</template>

<script>
  export default {
    name: 'brands',
    data () {
      return {
        msg: 'brands'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .brands {
    background-color: rgba( 75, 192, 226, 1 ); 
  }
</style>
