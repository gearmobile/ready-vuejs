<template lang="pug">

  v-container

    v-layout.mb-2( row, wrap )
      v-flex( xs12 )
        h4.text-xs-center
          | List of Crypto Currency

    v-layout( row, wrap )
      v-flex( xs12 )
        v-data-table.elevation-1( :items="items", :headers="headers", dark )
          template( slot="items", slot-scope="props" )
            td.text-xs-center
              | {{ props.item.rank }}
            td.text-xs-center
              | {{ props.item.name }}
            td.text-xs-center
              | {{ props.item.symbol }}
            td.text-xs-center
              v-btn( flat, color="secondary", icon, small, fab, outline, @click="onSelect(props.item.id)" )
                v-icon
                  | more_horiz

</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        headers: [
          { text: 'Rank', value: 'points', align: 'center', sortable: false },
          { text: 'Name', value: 'name', align: 'center', sortable: false },
          { text: 'Symbol', value: 'symbol', align: 'center', sortable: false },
          { text: 'Details', value: 'more', align: 'center', sortable: false }
        ]
      }
    },
    computed: {
      items () {
        return this.$store.getters.getCurrency
      }
    },
    methods: {
      onSelect (value) {
        this.$router.push({ path: '/list/' + value })
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
