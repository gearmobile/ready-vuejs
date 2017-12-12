<template lang="pug">

  v-card.mb-4( tag="section", style="background-color: #e7e5c9" )
    v-card-text
      v-select(
        single-line,
        :items="items",
        item-text="name",
        item-value="value",
        color="#9a8e7c",
        v-model="item"
      )

</template>

<script>
  export default {
    name: 'Masonry',
    computed: {
      items () {
        return this.$store.getters.getMasonry
      },
      item: {
        get () { return this.$store.getters.getMasonryCurrent },
        set (value) { this.$store.dispatch('setMasonry', value) }
      }
    }
  }
</script>

<style scoped>
  /**/
</style>

