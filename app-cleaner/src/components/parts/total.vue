<template lang="pug">
  ul.total
    li.total__title
      | К оплате:
    li.total__sum
      | {{ sum | locate }}
</template>

<script>
  import filters from '../../filters/filters.js'
  import { mapGetters } from 'vuex'

  export default {
    name: 'total',
    computed: {
      ...mapGetters({
        sum: 'getCleanSum'
      })
    },
    filters
  }
</script>

<style lang="scss" scoped>

  .total {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    list-style-type: none;
    padding-left: 0;

    &__title,
    &__sum 
    {
      font-weight: 700;
      color: #03aebc;
    }

    &__title
    {
      font-size: 36px;
    }

    &__sum
    {
      font-size: 38px;
    }
  }

</style>
