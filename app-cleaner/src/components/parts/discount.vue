<template lang="pug">
  .col-md-4
    .well.inner( :value="discount.name", :class="{ 'inner--active': discount.name === active }", @click="onActive()" )
      h5.inner__title
        | {{ discount.title }}
      p.inner__body
        | со скидкой #[strong {{ discount.value | addPercent }}]
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import filters from '../../filters/filters.js'

  export default {
    name: 'discount',
    filters,
    props: {
      discount: {
        type: Object,
        default: null
      }
    },
    methods: {
      ...mapActions({
        discountStatusSet: 'setDiscountStatus'
      }),
      onActive () {
        this.discountStatusSet(this.discount)
        this.discount.flag = !this.discount.flag
      }
    },
    computed: {
      ...mapGetters({
        discountStatus: 'getDiscountStatus'
      }),
      active: {
        get () { return this.discountStatus }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .inner {
    cursor: pointer;
    text-align: center;

    &__title {
      color: #03aebc;
      font-weight: 700;
      margin-bottom: 5px;
    }

    &--active {
      background-color: rgba( 3,174,188, .1 );
    }

    &__body {
      font-size: 20px;
      margin-bottom: 0;
    }
  }

</style>
