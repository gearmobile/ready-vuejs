<template lang="pug">
  
  // MAIN
  .main
    
    // INPUT BLOCK
    .row
      h3.page-header.text-center
        | Расчет стоимости
      app-input( v-for="(item, index) in items", :key="index", :order="item" )

    // CLEARING BLOCK
    .row
      h4.page-header.text-center
        | Разовая уборка
      .col-md-4
        .text-center.well.main__wrapper
          label.main__label( for="repair" )
            input( id="repair", name="type", type="radio", value="repair", v-model="clearing" )
            | после ремонта
      .col-md-4
        .text-center.well.main__wrapper
          label.main__label( for="general" )
            input( id="general", name="type", type="radio", value="general", v-model="clearing" )
            | генеральная
      .col-md-4
        .text-center.well.main__wrapper
          label.main__label( for="express" )
            input( id="express", name="type", type="radio", value="express", v-model="clearing" )
            | экспресс
    .row
      .col-md-12
        .text-center.well.main__wrapper
          label.main__label( for="single" )
            input( id="single", name="type", type="radio", value="single", v-model="clearing" )
            | разовая уборка

    // DISCOUNT BLOCK
    .row( v-if="clearing === 'single' || clearing === 'general'" )
      h4.page-header.text-center
        | Периодичная уборка
      app-discount( v-for="(discount, index) in discounts", :key="index", :discount="discount" )

    h3.page-header.text-center Дополнительно
    
    // PROMOTION SECTION
    .main__line( v-if="clearing !== 'repair'" )
      app-promotion( :promotion="promotion" )

    // REPAIR BLOCK
    .main__line( v-if="clearing === 'repair'" )
      app-cards( v-for="(card, index) in repairs", :key="index", :card="card" )

    // GENERAL BLOCK
    .main__line( v-if="clearing === 'general'" )
      app-cards( v-for="(card, index) in generals", :key="index", :card="card" )

    // COMMON BLOCK
    .main__line( v-if="clearing === 'single' || clearing === 'express'" )
      app-cards( v-for="(card, index) in cards", :key="index", :card="card" )

    // DETAILS SECTION
    .main__line.main__line--details
      app-details
      p: a.acent(href="#") Что входит в уборку

    // SECTION PROMOCODE
    template( v-if="clearing !== 'express'" )
      app-promocode( v-if="commonShow", :promocode="promocode" )

    // DISCOUNT SECTION
    .main__line( v-if="discountShow" )
      app-discount-output

    // SECTION TOTAL
    .main__line( v-if="commonShow" )
      app-total

    // ORDER BUTTON SECTION
    .row.order
      .col-md-6.col-md-offset-3
        button.btn.btn-primary.btn-lg.order__button( type="button", @click="orderShow()" ) Заказать уборку

</template>

<script>
  import filters from '../filters/filters.js'
  import { mapGetters, mapActions } from 'vuex'
  // components
  // -----------------------
  import Input from './parts/input.vue'
  import Cards from './parts/card.vue'
  import Promotion from './parts/promotion.vue'
  import Discount from './parts/discount.vue'
  import Promocode from './parts/promocode.vue'
  import DiscountOutput from './parts/discount-output.vue'
  import Details from './parts/details.vue'
  import Total from './parts/total.vue'

  export default {
    name: 'main',
    data () {
      return {
        clearing: 'single'
      }
    },
    filters,
    computed: {
      ...mapGetters({
        items: 'getData',
        cards: 'getCards',
        generals: 'getGenerals',
        repairs: 'getRepairs',
        promotion: 'getPromotion',
        discounts: 'getDiscount',
        commonShow: 'showCommon',
        discountShow: 'showDiscount',
        promocode: 'getPromocode'
      })
    },
    methods: {
      ...mapActions({
        orderShow: 'showOrder'
      })
    },
    components: {
      appInput: Input,
      appCards: Cards,
      appPromotion: Promotion,
      appDiscount: Discount,
      appPromocode: Promocode,
      appDiscountOutput: DiscountOutput,
      appDetails: Details,
      appTotal: Total
    }
  }
</script>

<style lang="scss" scoped>
  
  // MAIN SECTION

  .main {

    &__row {
      display: flex;
    }

    &__line {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &--details {
        flex-direction: column;
        align-items: center;
        background-color: #f5f5f5;
      }
    }

    &__wrapper {
      padding: 0;
      background-color: transparent;
    }

    &__label {
      width: 100%;
      cursor: pointer;
      padding: 20px 19px;
      background-color: #f5f5f5;

      &:hover {
        background-color: rgba( 3,174,188, .3 );
      }
    }

    & .acent {
      color: #03aebc;
      font-weight: 700;

      // &--more {
      //   font-weight: 700;
      // }
    }

    // ORDER SECTION

    & .order {
      padding-top: 20px;
      padding-bottom: 20px;

      &__button {
        width: 60%;
        margin-left: 20%;
      }
    }

  }

</style>
