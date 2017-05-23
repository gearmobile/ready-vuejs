<template lang="pug">
  .col-md-6
    .panel.panel-default
      .panel-heading
        h3.panel-title #[strong {{ stockCard.name }}]
          = ' '
          small ( Price: ${{ stockCard.price }} )
      .panel-body
        form.form-inline
          .form-group
            input.form-control( type='number', placeholder='Quantity', v-model.trim.number="quantity", :class="{ warning: unsifficientFunds }" )
          button.btn.btn-default.pull-right( type='button', @click="onSend()", :disabled="isDisabled" ) {{ buyOrNot }}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'stockCard',
    data () {
      return {
        quantity: null
      }
    },
    props: {
      stockCard: {
        type: Object,
        default: null
      }
    },
    computed: {
      ...mapGetters({
        commonFunds: 'getFunds'
      }),
      unsifficientFunds () {
        return this.quantity * this.stockCard.price > this.commonFunds
      },
      isDisabled () {
        return this.unsifficientFunds || this.quantity <= 0 || !Number.isInteger(this.quantity)
      },
      buyOrNot () {
        return this.unsifficientFunds ? 'Unsufficient Funds' : 'Buy'
      }
    },
    methods: {
      ...mapActions({
        sendOrder: 'buyStocks'
      }),
      onSend () {
        const order = {
          id: this.stockCard.id,
          name: this.stockCard.name,
          price: this.stockCard.price,
          quantity: this.quantity
        }
        this.sendOrder(order)
        this.quantity = null
      }
    }
  }
</script>

<style scoped>
  .warning {
    border: 1px solid red;
  }
</style>
