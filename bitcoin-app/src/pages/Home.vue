<template lang="pug">

  v-container
    v-layout( row, wrap )
      v-flex( xs12 )
        v-card.card
          img.card__logo( src="../static/cryptocurrency-bubble.jpg" )

</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss" scoped>

  .card {
    //
    &__logo {
      vertical-align: top;
      width: 100% !important;
      height: auto !important;
    }
  }
  
</style>
