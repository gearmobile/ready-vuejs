<template lang="pug">
  
  v-app.loan-calc
    
    v-container

      v-flex.text-xs-center.my-5( xs12, md8, offset-md2 )
          h3.display-1
            | Рассчитайте займ под залог автомобиля прямо сейчас!

      v-card.pa-5.indigo.lighten-4

        v-layout.mb-4
          v-flex( xs12 )
            h5.headline.text-xs-center.mb-4
              | Выберите стоимость автомобиля
            v-card
              v-card-text
                div.pt-2.loan-calc--align-center
                  h6.mb-0.indigo--text.hidden-sm-and-down.loan-calc--noselect {{ cost.min | currency }}
                  v-slider.px-4.my-0( :min="cost.min", :max="cost.max", v-model="cost.value", hide-details )
                  h6.mb-0.indigo--text.hidden-sm-and-down.loan-calc--noselect {{ cost.max | currency }}
                div.pt-4.loan-calc--align-center
                  h6.mb-0.teal--text.loan-calc--noselect {{ cost.value | currency }}

        main.elevation-6
          v-layout( row, wrap )
            // left column
            v-flex.text-xs-right.blue.darken-1.white--text.loan-calc--vert.hidden-sm-and-down( xs12, md4 )
              h4.white--text.mb-0.pr-2
                | автоломбард
              p.mb-0.pr-2
                | машина остается на нашей стоянке
            // center column
            v-flex.red.darken-1.py-5.loan-calc--center( xs12, md4 )
              h4.text-xs-center.white--text.mb-0
                | программа
            // right column
            v-flex.text-xs-left.green.darken-1.loan-calc--vert.hidden-sm-and-down( xs12, md4 )
              h4.white--text.mb-0.pl-2
                | автозалог
              p.mb-0.white--text.pl-2
                | вы оставляете нам только ПТС
                br
                | автомобиль остается у вас

          // CALCULATION

          v-layout( row )
            // left column
            v-flex.text-xs-right.blue.darken-2.white--text.loan-calc--right( xs4 )
              h6.mb-0.white--text.pr-2
                | {{ sum1 | currency }}
            // center column
            v-flex.red.darken-2.loan-calc--center( xs4 )
              h6.text-xs-center.white--text.mb-0.py-3
                | сумма займа
            // right column
            v-flex.text-xs-left.green.darken-2.loan-calc--left( xs4 )
              h6.mb-0.white--text.pl-2
                | {{ sum2 | currency }}

          // CALCULATION

          v-layout( row )
            // left column
            v-flex.text-xs-right.blue.darken-3.white--text.loan-calc--right( xs4 )
              h6.mb-0.white--text.pr-2
                | {{ pawnshop.percent | percent }}
            // center column
            v-flex.red.darken-3.loan-calc--center( xs4 )
              h6.text-xs-center.white--text.mb-0.py-3
                | процентная ставка
            // right column
            v-flex.text-xs-left.green.darken-3.loan-calc--left( xs4 )
              h6.mb-0.white--text.pl-2
                | {{ zalog.percent | percent }}

          // CALCULATION

          v-layout( row )
            // left column
            v-flex.text-xs-right.blue.darken-4.white--text.loan-calc--right( xs4 )
              h6.mb-0.white--text.pr-2
                | {{ payment1 | currency }}
            // center column
            v-flex.red.darken-4.loan-calc--center( xs4 )
              h6.text-xs-center.white--text.mb-0.py-3
                | ежемесячный платеж
            // right column
            v-flex.text-xs-left.green.darken-4.loan-calc--left( xs4 )
              h6.mb-0.white--text.pl-2
                | {{ payment2 | currency }}

</template>

<script>
  export default {
    name: 'main',
    filters: {
      percent (value) {
        return value + '%'
      },
      currency (value) {
        if (value === null) {
          return
        }
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
      }
    },
    data () {
      return {
        cost: {
          min: 400000,
          max: 5000000,
          value: 2000000
        },
        pawnshop: {
          sum: 0.7,
          percent: 2
        },
        zalog: {
          sum: 0.9,
          percent: 4
        }
      }
    },
    computed: {
      sum1 () {
        return this.cost.value * this.pawnshop.sum
      },
      sum2 () {
        return this.cost.value * this.zalog.sum
      },
      payment1 () {
        return this.sum1 * (this.pawnshop.percent / 100)
      },
      payment2 () {
        return this.sum2 * (this.zalog.percent / 100)
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './stylus/loan'
</style>
