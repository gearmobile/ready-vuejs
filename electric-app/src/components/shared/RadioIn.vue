<template lang="pug">

  v-flex( xs12, md6 )
    v-radio-group( v-model="material", :mandatory="false" )
      v-radio(
        :label="item.label",
        :value="item.value",
        :name="item.value",
        :id="item.value",
        hide-details
      )

</template>

<script>
  import EventBus from '../../events/eventBus.js'

  export default {
    name: 'RadioIn',
    props: {
      item: {
        type: Object,
        default () { return {} }
      }
    },
    computed: {
      material: {
        get () { return this.$store.getters.getMaterial },
        set (value) { this.$store.dispatch('setMaterial', value) }
      }
    },
    watch: {
      material () {
        EventBus.$emit('ON_SWITCH_MATERIAL')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .input-group__details
    display none
</style>

