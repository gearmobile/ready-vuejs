<template lang="pug">

  v-card.mb-4( style="background-color: #e7e5c9" )
    v-card-text
      
      // BRICK QUANTITTY
      v-layout.output( row, wrap, tag="section" )
        v-flex.output__label.text-xs-center.text-sm-left( xs12, sm6 )
          | {{ $t('output.totalBricks') }}
        v-flex.output__number.text-xs-center.text-sm-right( xs12, sm6, tag="p" )
          | {{ $n(quantity) }}
      
      // COMMON AREA
      v-layout.output( row, wrap tag="section" )
        v-flex.output__label.text-xs-center.text-sm-left( xs12, sm6 )
          | {{ $t('output.totalArea') }}
        v-flex.output__number.text-xs-center.text-sm-right( xs12, sm6, tag="p" )
          | {{ $n(area) }}
      
      // COMMON COST
      v-layout.output( row, wrap, tag="section" )
        v-flex.output__label.text-xs-center.text-sm-left( xs12, sm6 )
          | {{ $t('output.totalCost') }}
        v-flex.output__number.text-xs-center.text-sm-right( xs12, sm6, tag="p" )
          | {{ $n(cost, 'currency') }}

</template>

<script>
  export default {
    name: 'Output',
    computed: {
      quantity () {
        const result = this.$store.getters.getBricksQuantity
        return result === 0 ? null : result
      },
      area () {
        const result = this.$store.getters.getAreaCommon
        return result === 0 ? null : result
      },
      cost () {
        const result = this.$store.getters.getCost
        return result === 0 ? null : result
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .output {
    
    &__label {
      font-size 1.1rem
    }

    &__number {
      font-size 1.5rem
      margin-bottom 0
    }
  }

</style>

