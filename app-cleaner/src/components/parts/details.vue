<template lang="pug">
  
  // DETAILS
  .details.well

    // DETAILS TITLE    
    h5.details__title.page-header
      | перечень работ
    
    // DETAILS LIST
    ul.list
      li( v-for="(order, index) in orders", :key="index" ) <span class="acent acent--more">{{ order.title }} - {{ orderOutput(order) }}</span>

    // DETAILS DESCRIPTION
    p К вам приедет <span class="acent acent--more">{{ workerOutput }}</span> со всеми необходимыми средствами и приборами.
    p Уборка займет <span class="acent acent--more">{{ time | hoursAndMinutes }}</span>. Приедем в удобное для вас время.
    //- p: a.acent(href="#") Что входит в уборку
      
</template>

<script>
  import { mapGetters } from 'vuex'
  import mixins from '../../mixins/mixin.js'
  import filters from '../../filters/filters.js'

  export default {
    name: 'details',
    computed: {
      ...mapGetters({
        time: 'getTime',
        worker: 'getWorkers',
        orders: 'getOrders'
      }),
      workerOutput () {
        return this.worker + ' ' + this.getNoun(this.worker, 'специалист', 'специалиста', 'специалистов')
      }
    },
    methods: {
      orderOutput (order) {
        if (order.name === 'crockery') {
          return this.$options.filters.time(order.quantity)
        } else {
          return order.quantity + ' ' + this.getNoun(order.quantity, order.singular, order.few, order.plural)
        }
      }
    },
    mixins: [mixins],
    filters
  }
</script>

<style lang="scss" scoped>
  
  .details {
    text-align: center;
    width: 80%;
    margin-bottom: 0;

    & .acent {
      color: #03aebc;

      &--more {
        font-weight: 700;
      }
    }

    &__title {
      text-transform: uppercase;
    }

    & .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0;
    }
  }
</style>
