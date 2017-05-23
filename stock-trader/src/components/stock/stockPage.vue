<template lang="pug">
  .row
    stock-card( v-for="(stock, index) in stocks", :key="index", :stockCard="stock" )
</template>

<script>
  import { mapGetters } from 'vuex'
  import stockCard from './stockCard.vue'

  export default {
    name: 'stockPage',
    components: {
      stockCard
    },
    computed: {
      ...mapGetters({
        stocks: 'getStocks'
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
