<template lang="pug">
  v-container.six( fluid )
    header.text-xs-center.teal.lighten-1.py-3.mb-1.six__header
      h2.display-1.mb-0.white--text.six__title
        | {{ title }}
    v-layout( row, wrap )
      v-flex( xs12, sm4 )
        v-subheader
          | ФИО
      v-flex( xs12, sm8 )
        v-text-field( name="name", label="name", v-model="name", prepend-icon="account_box", required, hide-details )
    v-layout( row, wrap )
      v-flex( xs12, sm4 )
        v-subheader
          | Номер телефона
      v-flex( xs12, sm8 )
        v-text-field( name="phone", label="phone", v-model="phone", prepend-icon="phone", required, hide-details )
    v-layout( row, wrap )
      v-flex( xs12, sm4 )
        v-subheader
          | E-mail
      v-flex( xs12, sm8 )
        v-text-field( name="email", label="email", v-model="email", prepend-icon="email", hide-details )

</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'six',
    data () {
      return {
        title: 'Оформление заказа',
        name: '',
        phone: '',
        email: ''
      }
    },
    watch: {
      name () {
        eventBus.$emit('name', this.name)
      },
      phone () {
        eventBus.$emit('phone', this.phone)
      },
      email () {
        eventBus.$emit('email', this.email)
      }
    },
    created () {
      eventBus.$on('clrCustomer', () => {
        this.name = ''
        this.phone = ''
        this.email = ''
      })
    }
  }
</script>

<style lang="stylus" scoped>

  .six

    &__header
      width 100%

  @media screen and ( max-width 600px )

      .six__title
        font-size 30px !important
        padding 0 1rem !important
        line-height 1.2 !important

</style>
