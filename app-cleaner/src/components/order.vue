<template lang="pug">

  .order( v-if="orderShow" )
    h2.page-header.text-center Заказ на уборку

    .row

      // COLUMN PRIMARY
      .col-md-8

        // section contacts // http://vee-validate.logaretm.com/examples.html
        section.order__section.well
          h5.order__title Контактные данные
          // phone
          .form-group
            label.order__label( for="phone" ) телефон
            p.control
              input.form-control( :class="{ 'input': true, 'is-danger': errors.has('name') }", v-validate="'required|numeric|max_value:{11}'", data-vv-delay="500", id="phone", name="phone", type="tel", v-model="customer.phone" )
              span.help.is-danger( v-show="errors.has('phone')" ) {{ errors.first('phone') }}
          // name
          .form-group
            label.order__label( for="name" ) имя
            p.control
              input.form-control( :class="{ 'input': true, 'is-danger': errors.has('name') }", id="name", name="name", type="text", data-vv-delay="500", v-model="customer.name", v-validate="'required|alpha'" )
              span.help.is-danger( v-show="errors.has('name')" ) {{ errors.first('name') }}
          // email
          .form-group
            label.order__label( for="email" ) email
            p.control
              input.form-control( :class="{ 'input': true, 'is-danger': errors.has('email') }", id="email", name="email", type="email", v-model="customer.email", v-validate="'required|email'" )
              span.help.is-danger(v-show="errors.has('email')") {{ errors.first('email') }}


        // section date
        section.order__section.well
          h5.order__title Дата и время
          .row
            .col-md-6
              .form-group
                label.order__label( for="date" ) дата
                input.form-control( id="date", name="date", type="date", v-model="customer.date" )
            .col-md-6
              .form-group
                label.order__label( for="time" ) время
                input.form-control( id="time", name="time", type="time", v-model="customer.time" )

        // section address
        section.order__section.well
          h5.order__title Адрес
          .form-group
            label.order__label( for="street" ) улица, дом, номер квартиры
            input.form-control( id="street", name="street", type="text", v-model="customer.street" )
          .form-group
            label.order__label( for="entrance" ) подъезд
            input.form-control( id="entrance", name="entrance", type="number", v-model="customer.entrance" )
          .form-group
            label.order__label( for="floor" ) этаж
            input.form-control( id="floor", name="floor", type="number", v-model="customer.floor" )
          .form-group
            label.order__label( for="doorphone" ) домофон
            input.form-control( id="doorphone", name="doorphone", type="number", v-model="customer.doorphone" )

        // section metro
        section.order__section.well
          h5.order__title Метро
          select.form-control( v-model="customer.metro" )
            option( v-for="(metro, index) in metros", :key="index", :value="metro.value" ) {{ metro.title }}
          .order__wrapper
            label
              input( type="checkbox", v-model="customer.hoover" )
              | у меня нет пылесоса

        // section comments
        section.order__section.well
          h5.order__title Комментарии и пожелания
          textarea.form-control( rows="4", v-model="customer.comments" )

      // COLUMN SECONDARY
      .col-md-4

        // section conclusion
        section.order__section.well
          app-details

        // section sum
        section.order__section.well
          app-total

        // section continue
        section.order__section
          button.btn.btn-primary.order__button( type="button", @click="onOrder()" ) продолжить

        // modal
        app-modal
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import filters from '../filters/filters.js'
  import Total from './parts/total.vue'
  import Details from './parts/details.vue'
  import Modal from './parts/modal.vue'

  export default {
    name: 'order',
    filters,
    computed: {
      ...mapGetters({
        orderShow: 'getOrder',
        metros: 'getMetros',
        customer: 'getCustomer'
      })
    },
    methods: {
      ...mapActions({
        customerSet: 'setCustomer',
        toggleModal: 'modalToggle'
      }),
      onOrder () {
        this.toggleModal()
        this.customerSet(this.customer)
      }
    },
    components: {
      appTotal: Total,
      appDetails: Details,
      appModal: Modal
    }
  }
</script>

<style lang="scss" scoped>

  .order {

    &__section {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }

      // DETAILS SECTION

      & .details {
        width: 100%;

        & .list {
          background-color: red;
          width: 100%;
        }
      }

      // TOTAL SECTION

      & .total {
        flex-direction: column;
        align-items: center;
        margin: 0;
        width: 100%;
      }
    }

    &__title {
      margin-bottom: 30px;
    }

    &__label {
      text-transform: capitalize;
    }

    &__wrapper {
      padding-top: 30px;
    }

    &__button {
      width: 100%;
    }

    & .control {
      margin-bottom: 0;
    }

    & .is-danger {
      color: firebrick;
      font-style: italic;
    }

  }
</style>
