<template lang="pug">
  v-container.four
    v-layout( row, wrap )
      header.text-xs-center.teal.lighten-1.py-3.mb-1.four__header
        h2.four__title.display-1.mb-0.white--text
          | {{ title }}
        h3.four__subtitle.title.mb-0.white--text
          | {{ subtitle }}
      v-flex( xs12 )
        v-text-field( name="greeting", label="Ваше поздравление здесь ...", v-model="greeting", rows="7", multi-line, hide-details )

</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'four',
    data () {
      return {
        title: 'Индивидуальное поздравление',
        subtitle: '(мы обязательно напишем его на сертификате)',
        greeting: null
      }
    },
    watch: {
      greeting () {
        eventBus.$emit('greeting', this.greeting)
      }
    },
    created () {
      eventBus.$on('clear', () => {
        this.greeting = ''
      })
    }
  }
</script>

<style lang="stylus" scoped>

  @media screen and ( max-width: 600px )

    .four

      &__header
        width 100%

      & .four__title
        font-size 26px !important
        margin-bottom 1rem !important
        line-height 1.2 !important
        padding 0 1rem !important

      & .four__subtitle
        font-size 18px !important
        padding 0 1rem !important
        line-height 1.2 !important

</style>
