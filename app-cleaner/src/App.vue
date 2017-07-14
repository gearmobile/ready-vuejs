<template lang="pug">
  
  // CONTAINER
  #app.container
    
    // MAIN SECTION
    .row
      .col-md-10.col-md-offset-1
        app-main
    
    // ORDER SECTION
    .row
      .col-md-10.col-md-offset-1
        app-order
        
</template>

<script>
  
  import Main from './components/main.vue'
  import Order from './components/order.vue'
  
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      appMain: Main,
      appOrder: Order
    },
    methods: {
      ...mapActions({
        dataInit: 'initData',
        promoInit: 'initPromo',
        discountInit: 'initDiscount',
        customerInit: 'initCustomer',
        metrosInit: 'initMetros'
      })
    },
    created () {
      this.dataInit()
      this.promoInit()
      this.discountInit()
      this.customerInit()
      this.metrosInit()
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    background-color: #ddd;
  }
</style>
