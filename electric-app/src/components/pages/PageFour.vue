<template lang="pug">

  v-card( color="teal lighten-4" )
    v-card-text

      // HEADER
      v-layout( row, wrap )
        component-radio( :item="radios[0]" )
        component-radio( :item="radios[1]" )
        component-radio( :item="radios[2]" )
        component-radio( :item="radios[3]" )

      // MAIN
      v-layout.mb-2( row, wrap)
        component-stepper-list

      // ADDITIONAL
      v-layout.mt-4( row, wrap )
        component-check.mb-2( :item="items[0]" )
        component-check.mb-2( :item="items[1]" )
        component-check( :item="items[3]" )

</template>

<script>
  const StepperList = () => import('../shared/StepperList.vue')
  const RadioIn = () => import('../shared/RadioIn.vue')
  const CheckIn = () => import('../shared/CheckIn.vue')

  export default {
    name: 'PageFour',
    computed: {
      radios () {
        return this.$store.getters.getSelectMaterial
      },
      items () {
        return this.$store.getters.getSupport
      }
    },
    components: {
      ComponentStepperList: StepperList,
      ComponentRadio: RadioIn,
      ComponentCheck: CheckIn
    }
  }
</script>
