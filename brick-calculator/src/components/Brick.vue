<template lang="pug">

  v-card.mb-4( tag="section", style="background-color: #e7e5c9" )
    v-card-text
      v-select( single-line,
        :items="bricks",
        item-text="name",
        item-value="value",
        color="#9a8e7c",
        v-model="type"
      )

</template>

<script>
  export default {
    name: 'Brick',
    computed: {
      bricks () {
        return this.$store.getters.getBrick
      },
      type: {
        get () { return this.$store.getters.getBrickCurrent },
        set (value) { this.$store.dispatch('setBrick', value) }
      }
    }
  }
</script>

<style scoped>
  /**/
</style>

