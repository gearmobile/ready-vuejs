<template lang="pug">
  .promotion
    .well.promotion__panel
      | Только до #[strong 31 июля] помоем #[strong пять] окон за #[strong {{ price | locateSmall }} рублей]
    .well.promotion__input
      button.btn.btn-default( type="button", @click="removeOrder(promotion)", :disabled="decreaseState" ) -
      input.form-control.promotion__data( type="text", v-model="output", disabled )
      button.btn.btn-default( type="button", @click="addOrder(promotion)", :disabled="increaseState" ) +
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import mixins from '../../mixins/mixin.js'
  import filters from '../../filters/filters.js'

  export default {
    name: 'promotion',
    mixins: [mixins],
    filters,
    props: {
      promotion: {
        type: Object,
        default: null
      }
    },
    computed: {
      ...mapGetters({
        price: 'getPromotionPrice'
      }),
      increaseState () {
        return this.promotion.value === this.promotion.max
      },
      decreaseState () {
        return this.promotion.value === this.promotion.min
      },
      output: {
        get () {
          return this.promotion.value + ' ' + this.getNoun(this.promotion.value, this.promotion.singular, this.promotion.few, this.promotion.plural)
        }
      }
    },
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      increase () {
        this.promotion.value += this.promotion.step
      },
      decrease () {
        if (this.promotion.value === this.promotion.min) {
          return
        }
        this.promotion.value -= this.promotion.step
      },
      addOrder (order) {
        this.increase()
        this.orderAdd({
          max: 25,
          name: 'promotion',
          few: 'штук',
          min: 0,
          plural: 'штук',
          price: this.promotion.price / this.promotion.step,
          singular: 'штук',
          step: 5,
          time: 30,
          title: 'окна',
          value: 5
        })
      },
      removeOrder (order) {
        this.decrease()
        this.orderDelete(order)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .promotion {
    text-align: center;
    width: 100%;

    &__panel {
      background-color: #f6d9dd;
      color: #950d2a;
      font-size: 22px;
      border-color: lighten(#950d2a, 55%);
    }

    &__input {
      display: flex;
    }

    &__data {
      color: #950d2a;
      text-align: center;
    }
  }
  
</style>

