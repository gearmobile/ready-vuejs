<template lang="pug">

  v-card( color="teal lighten-4" )
    v-card-text

      v-layout.mb-4( row )
        v-flex( xs12 )
          v-card( color="teal lighten-3" )
            v-card-text
              h4.title
                | Перечень материалов
              ul
                li
                  | Розетки LEGRAND(Франция).
                li
                  | Декоративные рамки LEGRAND(Франция).
                li
                  | Выключатели LEGRAND(Франция).
                li
                  | Подрозетники и распределительные коробки фирмы HOGEL.
                li
                  | Современный, качественный, удовлетворяющий всем нормам, медный негорючий провод ВВГ НГ Ls или NYM необходимого в зависимости от нагрузки сечения.
                li
                  | Гофрированная ПВХ труба в комплекте с креплениями по необходимости.
                li
                  | Современный качественный кабель для спутникового телевидения фирмы CAVEL(Италия) SAT 703.
                li
                  | TV розетки LEGRAND(Франция).
                li
                  | Разветвитель(краб) для спутникового телевидения.
                li
                  | Расходники: алмазные диски, диски по металлу, буры, сверла, клемные колодки, изолента, дюбель-гвозди, шины, лампочки и патроны.
                li
                  | Алебастр и Ротбанд.

      v-layout.mb-4( row )
        v-flex( xs12 )
          v-card( color="teal lighten-3" )
            v-card-text
              h4.title
                | Перечень работ
              ul
                li
                  | Укладка проводов в штробу и по необходимости в гофрированную пвх трубу с креплением на клипсы.
                li
                  | Монтаж подрозетников.
                li
                  | Установка розеток.
                li
                  | Проверка работоспособности системы.
                li
                  | Установка тв розеток.

      v-layout( row )
        v-flex( xs12 )
          v-card( color="teal lighten-3" )
            v-card-text
              h4.title
                | Стоимость работы и материалов
  
              v-layout.mb-2( row )
                v-flex( xs8 )
                  | Персональная скидка на работу:
                v-flex.text-xs-right.mb-2( xs4, tag="h6" )
                  | {{ discount | currency }}
      
              v-layout.mb-2( row )
                v-flex( xs8 )
                  | Стоимость работы с учетом скидки:
                v-flex.text-xs-right.mb-2( xs4, tag="h6" )
                  | {{ costWork | currency }}

              v-layout.mb-2( row )
                v-flex( xs8 )
                  | Стоимость материалов:
                v-flex.text-xs-right.mb-2( xs4, tag="h6" )
                  | {{ costMaterial | currency }}

              v-layout( row )
                v-flex( xs8 )
                  | Сумма к оплате за работу и материалы, со скидкой:
                v-flex.text-xs-right( xs4, tag="h6" )
                  | {{ costTotal | currency }}

</template>

<script>
  import currency from '../../filters/currency'

  export default {
    name: 'Output',
    filters: {
      currency
    },
    computed: {
      discount () {
        return this.$store.getters.getCostCommonWorkDiscount
      },
      costWork () {
        return this.$store.getters.getCostCommonWorkWithDiscount
      },
      costMaterial () {
        return this.$store.getters.getCostMaterialCommon
      },
      costTotal () {
        return this.$store.getters.getCostTotal
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

