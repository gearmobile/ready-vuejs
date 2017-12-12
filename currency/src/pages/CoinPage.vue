<template lang="pug">

  v-container( grid-list-md )

    v-layout.mb-4( row, wrap )
      v-flex( xs12 )
        h4.text-xs-center.display-1
          | Crypto Currency - {{ id | upper }}

    v-layout.mb-4( row, wrap )
      v-flex( xs12 )
        v-data-table.elevation-1( :items="items", :headers="headers", hide-actions, dark )
          template( slot="items", slot-scope="props" )
            td.text-xs-center
              | {{ props.item.symbol }}
            td.text-xs-center
              | {{ props.item.price_usd }}
            td.text-xs-center
              | {{ props.item.percent_change_24h }}
            td.text-xs-center
              | {{ props.item.percent_change_7d }}

    v-layout( row, wrap )
      v-flex.text-xs-center( xs12, md6, offset-md3 )
        v-btn( dark, color="error", large, @click="onBack()" )
          | back to list

</template>

<script>
  import UpperCase from '../filters/toUpperCase'

  export default {
    name: 'CoinPage',
    props: {
      id: {
        type: String,
        default () { return '' }
      }
    },
    filters: {
      upper: UpperCase
    },
    data () {
      return {
        headers: [
          { text: 'Symbol', value: 'symbol', align: 'center', sortable: false },
          { text: 'Price ($)', value: 'usd', align: 'center', sortable: false },
          { text: '24 hours (%)', value: 'percent', align: 'center', sortable: false },
          { text: '7 days (%)', value: 'percent', align: 'center', sortable: false }
        ]
      }
    },
    computed: {
      items () {
        const result = []
        result.push(this.$store.getters.getCurrencySelected(this.id))
        return result
      }
    },
    methods: {
      onBack () {
        this.$router.push({ path: '/list' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
