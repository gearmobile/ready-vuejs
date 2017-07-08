<template lang="pug">
  
  q-layout

    // HEADER
    .toolbar( slot="navigation" )
      q-toolbar-title Калькулятор веса

    // NAVIGATION
    q-tabs.justified.tertiary( slot='navigation' )
      q-tab( route='/', icon='home', exact, replace ) Назад

    .layout-view
      .layout-padding
        
        .row
          .auto
            h5.text-center.secondo-title
              | Расчет массы квадратного блина для гантели (штанги)
            p.text-center.secondo-subtitle
              | То есть, вместо круга (как обычно) для гантели (штанги) можно применять квадраты
        
        
        .card
          .card-title.text-center.bg-secondary.text-white
            | Подбирать массу блина с помощью значений "Толщина листа", "Ширина блина", "Внутренний диаметр"
          .card-content
            
            .row.primo-row
              .auto
                p Толщина листовой заготовки: #[strong {{ input.list.thickness.value }}мм]
              .auto
                q-range( class="primary", :min="input.list.thickness.min", :max="input.list.thickness.max", :step="input.list.thickness.step", :value="input.list.thickness.value", v-model="input.list.thickness.value", @input="onCalc()", label )
            
            .row.primo-row
              .auto
                p Ширина и высота квадратного блина: #[strong {{ input.list.width.value }}мм]
              .auto
                q-range( class="secondary", :min="input.list.width.min", :max="input.list.width.max", :step="input.list.width.step", :value="input.list.width.value", v-model="input.list.width.value", @input="onCalc()", label, snap )
            
            .row.primo-row
              .auto
                p Внутренний диаметр блина: #[strong {{ input.list.diameter.value }}мм]
              .auto
                q-range( class="tertiary", :min="input.list.diameter.min", :max="input.list.diameter.max", :step="input.list.diameter.step", :value="input.list.diameter.value", v-model="input.list.diameter.value", @input="onCalc()", label )
            
            .row.text-center
              .auto
                p Масса блина: #[strong {{ output.weight | Round }}]

</template>

<script>
  export default {
    data () {
      return {
        input: {
          list: {
            thickness: {
              min: 10,
              max: 50,
              step: 1,
              value: 20
            },
            width: {
              min: 100,
              max: 500,
              step: 10,
              value: 200
            },
            diameter: {
              min: 26,
              max: 30,
              step: 1,
              value: 28
            }
          }
        },
        output: {
          weight: null,
          solidity: 7.85
        }
      }
    },
    methods: {
      onCalc () {
        const volumeSquare = this.input.list.width.value * this.input.list.width.value * this.input.list.thickness.value
        const volumeCylinder = Math.PI * this.input.list.diameter.value * this.input.list.thickness.value
        const result = (volumeSquare - volumeCylinder) * this.output.solidity
        this.output.weight = result
      }
    },
    created () {
      this.onCalc()
    }
  }
</script>

<style lang="stylus" scoped>
  .secondo-title
    margin-bottom 30px

  .secondo-subtitle
    margin-bottom 60px
  
  .card-content
    padding-top 50px
    padding-bottom 20px

  .primo-row
    margin-bottom 30px

</style>
