<template lang="pug">

  v-container( grid-list-md )

    v-layout( row )
      v-flex( xs12 )
        v-toolbar( dark )
          v-toolbar-title
            router-link.white--text( to="/", tag="span", style="cursor: pointer" )
              | Crypto Coins
          v-spacer
          v-toolbar-items
            v-btn( flat, color="white", to="/" )
              | home
            v-btn( flat, color="white", to="/list" )
              | list of coins

</template>

<script>
  export default {
    name: 'NavigationPanel'
  }
</script>

<style lang="scss" scoped>
  //
</style>
