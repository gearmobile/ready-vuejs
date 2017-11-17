<template lang="pug">
  
  v-flex( xs12 )
    component-stepper( v-for="(point, index) in points", :key="index", :point="point" )

</template>

<script>
  const Stepper = () => import('./Stepper.vue')

  export default {
    name: 'StepperList',
    components: {
      ComponentStepper: Stepper
    },
    computed: {
      points () {
        return this.$store.getters.getData
      }
    }
  }

</script>
