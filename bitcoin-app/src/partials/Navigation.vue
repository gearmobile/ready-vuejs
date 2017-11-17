<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12 )
        v-toolbar( dark )
          v-toolbar-title
            router-link.white--text( to="/", tag="span", style="cursor: pointer" )
              | Crypto Coins
          v-spacer
          v-toolbar-items
            v-btn.white--text( flat, to="/" )
              | home
            v-btn.white--text( flat, to="/list" )
              | list of coins

</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style lang="scss" scoped>
  //
</style>

