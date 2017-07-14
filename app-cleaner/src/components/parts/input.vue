<template lang="pug">
  .col-md-6.text-center
    h4.page-header.text-capitalize {{ order.title }}
    .text-center.well.input__row
      button.btn.btn-default( @click="removeOrder(order)", :disabled="decreaseState" ) -
      input.form-control.text-center( type="text", :name="order.name", v-model="output", disabled )
      button.btn.btn-default( @click="addOrder(order)", :disabled="increaseState" ) +
</template>

<script>
  import { mapActions } from 'vuex'
  import mixins from '../../mixins/mixin.js'

  export default {
    name: 'input',
    mixins: [mixins],
    props: {
      order: {
        type: Object,
        default: null
      }
    },
    computed: {
      increaseState () {
        return this.order.value === this.order.max
      },
      decreaseState () {
        return this.order.value === this.order.min
      },
      output: {
        get () {
          return this.order.value + ' ' + this.getNoun(this.order.value, this.order.singular, this.order.few, this.order.plural)
        }
      }
    },
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      increase () {
        this.order.value += this.order.step
      },
      decrease () {
        if (this.order.value === this.order.min) {
          return
        }
        this.order.value -= this.order.step
      },
      addOrder (order) {
        this.increase()
        this.orderAdd(order)
      },
      removeOrder (order) {
        this.decrease()
        this.orderDelete(order)
      }
    },
    created () {
      this.orderAdd(this.order)
    }
  }
</script>

<style lang="scss" scoped>

  .input {

    &__row {
      display: flex;
    }
  }

</style>
