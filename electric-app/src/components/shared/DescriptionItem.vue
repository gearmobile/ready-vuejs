<template lang="pug">

  v-card.mb-2( color="teal lighten-2" )
    v-container( fluid )
      v-layout( row )
        v-flex.pr-2( xs1 )
          .display-2.white--text
            | {{ itemNumber }}
        v-flex.pl-2( xs11 )
          .headline.white--text
            | {{ item.title }}
          .body-1
            | {{ item.subtitle }}

</template>

<script>
  export default {
    name: 'DescriptionItem',
    props: {
      item: {
        type: Object,
        default () { return {} }
      },
      itemIndex: {
        type: Number,
        default () { return null }
      },
      itemDividerShow: {
        type: Number,
        default () { return null }
      }
    },
    computed: {
      itemNumber () {
        return this.itemIndex + 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

