<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="0" ) Расход топлива
    .layout-view
      .layout-padding

        // HEADER
        .row.gutter
          .auto
            p Вычисляет необходимое количество топлива на определенное расстояние при заданном потреблении и цене топлива

        // LENGTH
        .row.gutter
          .width-2of3
            p Расстояние, км
          .width-2of1
            input( v-model.trim="input.length" )
      
        // CONSUMPTION
        .row.gutter
          .width-2of3
            p Расход топлива на 100 км, л
          .width-2of1
            input( v-model.trim="input.consumption" )
      
        // PRICE
        .row.gutter
          .width-2of3
            p Стоимость топлива, руб
          .width-2of1
            input( v-model.trim="input.price" )
      
        // CALCULATE
        .row.gutter
          .auto
            .group
              button.primary.full-width( @click="onConsumption()" ) Расчитать
              button.secondary.full-width( @click="onReset()" ) Сбросить
      
        // QUANTITY OF FUEL
        .row.gutter
          .width-2of3
            p Количество необходимого топлива, л
          .width-2of1
            input( v-model="output.totalConsumption" )

        // QUNTITY OF MONEY
        .row.gutter
          .width-2of3
            p Количество денег, руб
          .width-2of1
            input( v-model="output.totalSum" )
</template>

<script>
  export default {
    data () {
      return {
        input: {
          length: 800,
          consumption: 7,
          price: 35
        },
        output: {
          totalConsumption: null,
          totalSum: null
        }
      }
    },
    methods: {
      onConsumption () {
        this.output.totalConsumption = (this.input.length * this.input.consumption) / 100
        this.output.totalSum = this.output.totalConsumption * this.input.price
      },
      onReset () {
        this.output.totalConsumption = null
        this.output.totalSum = null
      }
    }
  }
</script>

<style lang="stylus">
  //
</style>
