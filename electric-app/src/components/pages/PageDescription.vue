<template lang="pug">
  
  v-card( color="teal lighten-4" )
    v-card-text
      .headline.mb-2
        | Инструкция по использованию калькулятора
      p
        | Мы разработали для Вас удобный калькулятор стоимости работ и материалов. С его помощью Вы сможете самостоятельно оценить, какую сумму Вы потратите на выбранные Вами работы и необходимые для этого материалы.

      component-description( v-for="(item ,index) in items", :key="index", :item="item", :itemIndex="index", :itemDividerShow="items.length" )

</template>

<script>
  import DescriptionItem from '../shared/DescriptionItem.vue'

  export default {
    name: 'PageDescription',
    computed: {
      items () {
        return this.$store.getters.getDescription
      }
    },
    components: {
      ComponentDescription: DescriptionItem
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
