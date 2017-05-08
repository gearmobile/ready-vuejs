<template lang="pug">
  nav.navbar.navbar-default.navbar-fixed-top
    .container-fluid
      .navbar-left
        a.navbar-brand( href="#" ) appManager
        ul.nav.navbar-nav
          router-link.nav-item( tag="li", activeClass="active", to="/", exact )
            a( href="#" ) Home
          router-link.nav-item( tag="li", activeClass="active", to="/about" )
            a( href="#" ) About
      ul.nav.navbar-nav.navbar-right
        router-link.nav-item( tag="li", to="/add", activeClass="active" )
          a( href='#' ) Add Customer
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
