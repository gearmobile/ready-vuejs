<template lang="pug">
  v-container.two( fluid, grid-list-sm )
    v-layout( row, wrap )
      header.text-xs-center.teal.lighten-1.py-3.mb-1.two__header
        h2.display-1.mb-0.white--text.two__title
          | {{ title }}
      v-flex( v-for="service in services", :key="service", xs12, sm6 )
        v-card.two__card.py-4( @click="onSelect(service)", :class="{ 'teal lighten-2 white--text': active === service.name }" )
          v-card-text.text-xs-center
            div.headline
              | {{ service.title }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'two',
    data () {
      return {
        title: 'Добавим дополнительные услуги?',
        active: '',
        services: [
          {
            name: 'service1',
            title: 'макияж',
            price: 200
          },
          {
            name: 'service2',
            title: 'аренда платья',
            price: 300
          },
          {
            name: 'service3',
            title: 'прическа',
            price: 400
          },
          {
            name: 'service4',
            title: 'хаски',
            price: 500
          }
        ]
      }
    },
    methods: {
      onSelect (value) {
        eventBus.$emit('service', value)
        this.active = value.name
      }
    },
    created () {
      eventBus.$on('clear', () => {
        this.active = ''
      })
    }
  }
</script>

<style lang="stylus" scoped>

  .two

    &__header
      width 100%

    &__card
      cursor pointer

  @media screen and ( max-width 600px )

    .two__title
      font-size 30px !important
      padding 0 1rem !important
      line-height 1.2 !important

</style>
