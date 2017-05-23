<template lang="pug">
  .col-md-6
    .panel.panel-default
      .panel-heading
        h3.panel-title #[strong {{ stockPortfolioCard.name }}]
          = ' '
          small ( Price: ${{ stockPortfolioCard.price }} | Quantity: {{ stockPortfolioCard.quantity }} )
          p.pull-right #[strong Total Sum:] ${{ stockPortfolioCard.price * stockPortfolioCard.quantity }}
      .panel-body
        form.form-inline
          .form-group
            input.form-control( type='number', placeholder='Quantity', v-model.trim.number="quantity", :class="{ warning: unsufficientQuantity }" )
          button.btn.btn-default.pull-right( type='button', @click="onSell()", :disabled="unsufficientQuantity || lessOrNotNumber" ) {{ sellOrNot }}
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'portfolioCard',
    data () {
      return {
        quantity: 0
      }
    },
    props: {
      stockPortfolioCard: {
        type: Object,
        default: null
      }
    },
    computed: {
      unsufficientQuantity () {
        return this.quantity > this.stockPortfolioCard.quantity
      },
      lessOrNotNumber () {
        return this.quantity <= 0 || !Number.isInteger(this.quantity)
      },
      sellOrNot () {
        return this.unsufficientQuantity ? 'Not Enough Stocks' : 'Sell'
      }
    },
    methods: {
      ...mapActions({
        sellStock: 'sellStocks'
      }),
      onSell () {
        const record = {
          name: this.stockPortfolioCard.name,
          price: this.stockPortfolioCard.price,
          quantity: this.quantity
        }
        this.sellStock(record)
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

