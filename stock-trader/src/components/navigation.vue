<template lang="pug">
  nav.navbar.navbar-default
    .container-fluid
      .navbar-header
        router-link.navbar-brand( tag='a', to='/' ) Stocker Trader
      ul.nav.navbar-nav
        router-link( tag='li', to='/portfolio', activeClass='active' ): a( href='#' ) Portfolio
        router-link( tag='li', to='/stock', activeClass='active' ): a( href='#' ) Stock
      ul.nav.navbar-nav.navbar-right
        li: a( href='#', @click="onEnd()" ) End Day
        li.dropdown( :class="{ open: isToggle }", @click="onShow()" )
          a.dropdown-toggle(href='#', data-toggle='dropdown', role='button', aria-haspopup='true', aria-expanded='false') Save &amp; Load 
            span.caret
          ul.dropdown-menu
            li: a( href='#', @click="onSave()" ) Save
            li: a( href='#', @click="onLoad()" ) Load
        li: a( href="#" ) #[strong Funds: {{ funds | divider }}]
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'navigation',
    data () {
      return {
        isToggle: false
      }
    },
    computed: {
      ...mapGetters({
        funds: 'getFunds',
        portfolioStocks: 'getPortfolioStocks',
        originalStocks: 'getStocks'
      })
    },
    methods: {
      ...mapActions({
        randomStocks: 'randomizeStocks',
        loadRemoteState: 'loadData'
      }),
      onShow () {
        this.isToggle = !this.isToggle
      },
      onEnd () {
        this.randomStocks()
      },
      onLoad () {
        this.loadRemoteState()
      },
      onSave () {
        const data = {
          funds: this.funds,
          portfolioStocks: this.portfolioStocks,
          originalStocks: this.originalStocks
        }
        this.$http.put('stocks.json', data)
      }
    }
  }
</script>
