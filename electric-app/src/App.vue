<template lang="pug">
  
  // ROOT
  v-app.app
    v-container

      // NAVIGATION SECTION
      v-layout.teal.lighten-3.text-xs-center.white--text.mb-3( row, wrap )
        v-flex.py-3.app__nav(
          xs12,
          md3,
          @click="onSwitch('ComponentOne')",
          :class="{ 'app__nav--active': current === 'ComponentOne' }"
        )
          .title
            | Квартира
        v-flex.py-3.app__nav(
          xs12,
          md3,
          @click="onSwitch('ComponentTwo')",
          :class="{ 'app__nav--active': current === 'ComponentTwo' }"
        )
          .title
            | Коттедж
        v-flex.py-3.app__nav(
          xs12,
          md3,
          @click="onSwitch('ComponentThree')",
          :class="{ 'app__nav--active': current === 'ComponentThree' }"
        )
          .title
            | Офис
        v-flex.py-3.app__nav(
          xs12,
          md3,
          @click="onSwitch('ComponentFour')",
          :class="{ 'app__nav--active': current === 'ComponentFour' }"
        )
          .title
            | Дача

    // OUTPUT SECTION
    v-container( grid-list-lg )
      v-layout( row, wrap )

        // LEFT SECTION OUTPUT
        v-flex( xs12, md6 )

          // MAIN OUTPUT SECTION
          v-slide-x-reverse-transition( mode="out-in" )
            keep-alive
              component( :is="current" )

        // RIGHT SECTION OUTPUT
        v-flex( xs12, md6 )
          v-slide-x-reverse-transition( mode="out-in" )
            keep-alive
              component-description( v-if="!show" )
              component-output( v-else )
    
    // ALERT COMPONENT
    component-alert

</template>

<script>
  const One = () => import('./components/pages/PageOne.vue')
  const Two = () => import('./components/pages/PageTwo.vue')
  const Three = () => import('./components/pages/PageThree.vue')
  const Four = () => import('./components/pages/PageFour.vue')
  const Description = () => import('./components/pages/PageDescription.vue')
  const Output = () => import('./components/shared/Output.vue')
  const Alert = () => import('./components/shared/Alert.vue')

  import EventBus from './events/eventBus'

  export default {
    data () {
      return {
        current: 'ComponentOne'
      }
    },
    components: {
      ComponentDescription: Description,
      ComponentOutput: Output,
      ComponentOne: One,
      ComponentTwo: Two,
      ComponentThree: Three,
      ComponentFour: Four,
      ComponentAlert: Alert
    },
    methods: {
      onSwitch (value) {
        this.current = value
        this.$store.dispatch('clearOrder')
        this.$store.dispatch('clearAdditional')
        EventBus.$emit('ON_SWITCH_MATERIAL')
      }
    },
    computed: {
      show () {
        return this.$store.getters.getCheckInputs
      }
    }
  }
</script>

<style lang="stylus">

  @import './stylus/main'
  @import './stylus/app'

</style>
