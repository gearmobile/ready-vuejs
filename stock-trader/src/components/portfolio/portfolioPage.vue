<template lang="pug">
  .row
    stock-card( v-for="(stockPortfolio, indexPortfolio) in stocksPortfolio", :key="indexPortfolio", :stockPortfolioCard="stockPortfolio" )
</template>

<script>
  import stockCard from './portfolioCard'
  import { mapGetters } from 'vuex'

  export default {
    name: 'portfolioPage',
    computed: {
      ...mapGetters({
        stocksPortfolio: 'getPortfolioStocks'
      })
    },
    components: {
      stockCard
    }
  }
</script>
