<template lang="pug">
  .discount
    ul.discount__row
      li.discount__primo Общая сумма:
      li.discount__primo--sum {{ common | locate }}
    ul.discount__row
      li.discount__secondo Сумма скидки:
      li.discount__secondo--sum {{ discount | locate }}
    ul.discount__row
      li.discount__tetro Итого сумма:
      li.discount__tetro--sum {{ total | locate }}
</template>

<script>
  import filters from '../../filters/filters.js'
  import { mapGetters } from 'vuex'

  export default {
    name: 'discount-output',
    computed: {
      ...mapGetters({
        common: 'getDirtySum',
        discount: 'getDiscountSum',
        total: 'getCleanSum'
      })
    },
    filters
  }
</script>

<style lang="scss">

    .discount {
      width: 100%;
      margin: 0 3%;
      padding: 20px 5% 0;
      color: #03aebc;
      background-color: azure;

      &__row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        list-style-type: none;
        padding-left: 0;
      }

      &__primo {
        font-size: 22px;

        &--sum {
          font-weight: 700;
          font-size: 24px;
        }
      }

      &__secondo {
        font-size: 20px;

        &--sum {
          font-weight: 700;
          font-size: 22px;
        }
      }

      &__tetro {
        font-size: 26px;

        &--sum {
          font-weight: 700;
          font-size: 28px;
        }
      }
    }
</style>
