<template lang="pug">
  v-container.five( fluid, grid-list-sm )
    v-layout( row, wrap )
      header.text-xs-center.teal.lighten-1.py-3.mb-1.five__header
        h2.display-1.mb-0.white--text.five__title
          | {{ title }}
      v-flex( v-for="shipping in shippings", :key="shipping", xs12 )
        v-card.five__card.py-4( @click="onSelect(shipping)", :class="{ 'teal lighten-2 white--text': active === shipping.name }" )
          v-card-text.text-xs-center
            div.headline
              | {{ shipping.title }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'five',
    data () {
      return {
        title: 'Как сертификат попадет к вам?',
        active: '',
        shippings: [
          {
            name: 'shipping1',
            title: 'Самовывоз',
            price: 500
          },
          {
            name: 'shipping2',
            title: 'Доставка в отделение почты',
            price: 600
          }
        ]
      }
    },
    methods: {
      onSelect (value) {
        eventBus.$emit('shipping', value)
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

  .five

    &__header
      width 100%

    &__card
      cursor pointer

  @media screen and ( max-width 600px )

    .five__title
      font-size 30px !important
      padding 0 1rem !important
      line-height 1.2 !important

</style>
