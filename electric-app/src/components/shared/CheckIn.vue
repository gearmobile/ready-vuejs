<template lang="pug">

  v-flex( xs12 )
    v-checkbox(
      :label="item.label",
      :value="item.value",
      :name="item.value",
      :id="item.value",
      v-model="additional",
      hide-details
    )

</template>

<script>
  export default {
    name: 'CheckIn',
    props: {
      item: {
        type: Object,
        default () { return {} }
      }
    },
    computed: {
      additional: {
        get () { return this.$store.getters.getAdditional },
        set (value) { this.$store.dispatch('setAdditional', value) }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
