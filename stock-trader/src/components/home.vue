<template lang="pug">
  .row
    .col-md-12
      .well.well-lg
        h1 Trade or View your Portfolio
        p You may #[strong Save] or #[strong Load] your Data
        p Click on #[strong End Day] button to begin a new Day!
        hr
        h3 #[strong Your Funds: {{ funds | divider }}]
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    computed: {
      ...mapGetters({
        funds: 'getFunds'
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
