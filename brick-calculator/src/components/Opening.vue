<template lang="pug">
  
  
  v-card.mb-4( tag="section", style="background-color: #fef4d2" )
    
    v-card-text.pa-3
      
      v-layout( row, wrap )
    
        v-flex( xs12, sm4, tag="section" )
          v-text-field(
            name="width",
            v-model="width",
            id="width",
            :label="$t('opening.width')",
            :mask="mask",
            :hint="$t('opening.hint')",
            persistent-hint,
            color="#9a8e7c"
          )
      
        v-flex( xs12, sm4, tag="section" )
          v-text-field(
            name="height",
            v-model="height",
            id="height",
            :label="$t('opening.height')",
            :mask="mask",
            :hint="$t('opening.hint')",
            persistent-hint,
            color="#9a8e7c"
          )
      
        v-flex.opening-control( xs12, sm4, tag="section", v-if="id !== 0" )
          v-btn.ma-0( color="error", dark, :block="$vuetify.breakpoint.xsOnly" @click="onClick()" )
            | {{ $t('opening.remove-opening') }}

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Opening',
    props: {
      id: {
        type: Number,
        required: true,
        default () { return null }
      }
    },
    computed: {
      ...mapGetters({
        mask: 'getMaskOpening'
      }),
      width: {
        get () { return this.$store.getters.getOpeningWidth(this.id) },
        set (value) { this.$store.dispatch('setOpeningWidth', { index: this.id, value: value }) }
      },
      height: {
        get () { return this.$store.getters.getOpeningHeight(this.id) },
        set (value) { this.$store.dispatch('setOpeningHeight', { index: this.id, value: value }) }
      }
    },
    methods: {
      onClick () {
        this.$store.dispatch('removeComponent', this.id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
  .opening-control
    display: flex
    justify-content: flex-end
    align-items: center

</style>

