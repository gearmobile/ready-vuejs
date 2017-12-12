<template lang="pug">

  v-card.mb-4( style="background-color: #e7e5c9" )
    v-card-text
      
      v-container( grid-list-md )
        v-layout( row, wrap, tag="section" )
          
          v-flex( xs12, md4, tag="section" )
            v-text-field(
              type="text",
              :counter="maskCounter",
              :hint="$t('building.hint')",
              persistent-hint,
              name="length",
              id="length",
              :label="$t('building.length')",
              v-model.trim="length",
              color="#9a8e7c",
              :mask="mask"
            )

          v-flex( xs12, md4, tag="section" )
            v-text-field(
              type="text",
              :counter="maskCounter",
              :hint="$t('building.hint')",
              persistent-hint,
              name="width",
              id="width",
              :label="$t('building.width')",
              v-model.trim="width",
              color="#9a8e7c",
              :mask="mask"
            )

          v-flex( xs12, md4, tag="section" )
            v-text-field(
              type="text",
              :counter="maskCounter",
              :hint="$t('building.hint')",
              persistent-hint,
              name="height",
              id="height",
              :label="$t('building.height')",
              v-model.trim="height",
              color="#9a8e7c",
              :mask="mask"
            )

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Building',
    computed: {
      ...mapGetters({
        mask: 'getMask',
        maskCounter: 'getMaskCounter'
      }),
      length: {
        get () { return this.$store.getters.getBuildingLength },
        set (value) { this.$store.dispatch('setLength', value) }
      },
      width: {
        get () { return this.$store.getters.getBuildingWidth },
        set (value) { this.$store.dispatch('setWidth', value) }
      },
      height: {
        get () { return this.$store.getters.getBuildingHeight },
        set (value) { this.$store.dispatch('setHeight', value) }
      }
    }
  }
</script>

<style scoped>
  /**/
</style>

