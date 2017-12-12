<template lang="pug">

  v-card.mb-4( style="background-color: #e7e5c9" )
    v-card-text
      
      component-opening( v-for="(component, index) in components", :key="index", :id="index" )
      
      v-flex.text-xs-right( xs12, tag="section", v-if="!componentsLimit" )
        v-btn( color="primary", dark, :block="$vuetify.breakpoint.xsOnly" @click.native="onClick()", :disabled="!openingFields || checkCommon" )
          | {{ $t('opening.add-opening') }}

</template>

<script>
  import Opening from './Opening.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'OpeningWrapper',
    components: {
      ComponentOpening: Opening
    },
    methods: {
      onClick () {
        this.$store.dispatch('addComponent')
      }
    },
    computed: {
      ...mapGetters({
        components: 'getOpening',
        componentsLimit: 'getOpeningLimit',
        openingFields: 'checkFieldsOpening',
        checkCommon: 'checkCommonLess'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

