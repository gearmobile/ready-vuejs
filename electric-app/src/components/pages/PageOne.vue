<template lang="pug">

  v-card( color="teal lighten-4" )
    v-card-text

      // HEADER
      v-layout( row, wrap )
        component-radio( :item="radios[0]" )
        component-radio( :item="radios[1]" )

      // MAIN
      v-layout.mb-2( row, wrap )
        component-stepper-list

      // ADDITIONAL
      v-layout.mt-4( row, wrap )
        component-check.mb-2( :item="items[0]" )
        component-check.mb-2( :item="items[2]" )
        component-check( :item="items[3]" )

</template>

<script>
  import StepperList from '../shared/StepperList.vue'
  import RadioIn from '../shared/RadioIn.vue'
  import CheckIn from '../shared/CheckIn.vue'

  export default {
    name: 'PageOne',
    computed: {
      items () {
        return this.$store.getters.getSupport
      },
      radios () {
        return this.$store.getters.getSelectMaterial
      }
    },
    components: {
      ComponentStepperList: StepperList,
      ComponentCheck: CheckIn,
      ComponentRadio: RadioIn
    }
  }

</script>
