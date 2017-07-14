<template lang="pug">
  .card.col-md-3
    .well.card__wrapper
      h6.card__title {{ card.title }}
      figure.card__image
        img( :src="imagePath", :alt="card.title" )
      .card__item
        button.btn.btn-default( type="button", @click="removeOrder(card)", :disabled="decreaseState" ) -
        input.form-control.text-center( type="text", :name="card.name", v-model="output", disabled )
        button.btn.btn-default( type="button", @click="addOrder(card)", :disabled="increaseState" ) +
</template>

<script>
  import mixins from '../../mixins/mixin.js'
  import filters from '../../filters/filters.js'
  import { mapActions } from 'vuex'

  export default {
    name: 'card',
    props: {
      card: {
        type: Object,
        default: null
      }
    },
    mixins: [mixins],
    filters,
    computed: {
      increaseState () {
        return this.card.value === this.card.max
      },
      decreaseState () {
        return this.card.value === this.card.min
      },
      output: {
        get () {
          if (this.card.name === 'crockery') {
            return this.$options.filters.time(this.card.value)
          } else {
            return this.card.value + ' ' + this.getNoun(this.card.value, this.card.singular, this.card.few, this.card.plural)
          }
        }
      },
      imagePath () {
        return require('../../assets/' + this.card.name + '.png')
      }
    },
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      increase () {
        this.card.value += this.card.step
      },
      decrease () {
        if (this.card.value === this.card.min) {
          return
        }
        this.card.value -= this.card.step
      },
      addOrder (order) {
        this.increase()
        this.orderAdd(order)
      },
      removeOrder (order) {
        this.decrease()
        this.orderDelete(order)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .card {
    text-align: center;

    &__title {
      font-weight: 700;
      font-size: 16px;
      text-transform: capitalize;
    }

    &__image {
      margin-bottom: 20px;
      margin-top: 20px;
    }
    
    &__wrapper {
      min-height: 160px;
    }

    &__item {
      display: flex;
    }
  }

</style>
