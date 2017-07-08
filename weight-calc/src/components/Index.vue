<template lang="pug">
  q-layout

    // header
    .toolbar.primary( slot="header" )
      q-toolbar-title Калькулятор веса

    // navigation
    q-tabs.justified.tertiary( slot='navigation' )
      q-tab( route='/primo', name="tab-1", icon="donut_small", exact, replace ) Круглый блин
      q-tab( route='/secondo', name="tab-2", icon='dashboard', replace ) Квадратный блин


    .layout-view
      .layout-padding
        .card
          .card-title.bg-teal.text-white
            | Расчет массы самодельных блинов
          .card-content
            img.image( src="../assets/fitness-girl-evolution.jpg" )
</template>


<script>
  export default {
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="stylus">
  .image
    width 100%
    height auto
</style>
