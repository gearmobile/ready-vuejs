<template lang="pug">
  .promocode.row.well
    h2.promocode__title.page-header
      | У меня есть <span class="text-uppercase">промокод</span>
    .promocode__row
      input.form-control( type="text", v-model="code" )
      button.btn.btn-default( type="button", @click="onPromo()", :disabled="status" )
        | Применить
    p.promocode__error( v-if="error" )
      | Вы ввели неправильный промокод
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'promocode',
    data () {
      return {
        code: null
      }
    },
    props: {
      promocode: {
        type: Object,
        default: null
      }
    },
    computed: {
      ...mapGetters({
        status: 'getPromoStatus',
        error: 'getPromoError'
      })
    },
    methods: {
      ...mapActions({
        promoValueSet: 'setPromoValue'
      }),
      onPromo () {
        this.promoValueSet(this.code)
        this.code = this.status ? 'Промокод успешно активирован' : 'Ошибка!'
      }
    }
  }
</script>

<style lang="scss" scoped>

  .promocode {
    width: 80%;
    margin-left: 10%;
    margin-top: 40px;

    &__title {
      font-size: 26px;
      text-align: center;
      margin-bottom: 30px;
    }

    &__row {
      display: flex;
    }

    &__error {
      color: red;
      margin-top: 10px;
      margin-bottom: 0;
      font-style: italic;
    }
  }
  
</style>
