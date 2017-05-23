<template lang="pug">
  #app.container
    .row
      .col-md-10.col-md-offset-1
        app-nav
    .row
      .col-md-10.col-md-offset-1
        transition( name="slide", mode="out-in", :enter-active-class="enterClass", :leave-active-class="leaveClass" )
          router-view
</template>

<script>
  import { mapActions } from 'vuex'
  import appNav from './components/navigation.vue'

  export default {
    name: 'app',
    data () {
      return {
        status: true,
        enterClass: 'animated fadeIn',
        leaveClass: 'animated fadeOut'
      }
    },
    components: {
      appNav
    },
    methods: {
      ...mapActions({
        initStock: 'initStocks'
      })
    },
    created () {
      this.initStock()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
  #app .animated {
    -webkit-animation-duration: .4s;
    animation-duration: .4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
</style>
