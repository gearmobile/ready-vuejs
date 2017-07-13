<template lang="pug">

  v-app.app

    v-container

      v-layout.mb-2( row, wrap )
        v-flex.app__tabs( v-for="i in 6", :key="i", xs2 )
          v-card( flat, :class="{ 'teal darken-1 white--text': active === i }" )
            v-card-text.text-xs-center
              span.hidden-xs-only.app__caption
                | step {{ i }}
              span.hidden-sm-and-up.app__caption
                | {{ i }}

      v-layout( row, wrap )
        v-flex.mb-2( xs12, md8 )
          v-slide-x-transition( mode="out-in" )
            keep-alive
              component( :is="current" )
        v-flex.mb-2( xs12, md4 )
          v-card.teal.lighten-4.app__output
            v-card-text.text-xs-center
              h2.display-2.mb-0
                | {{ sum | currency }}

      v-layout.app__btns( row, wrap )
        v-flex( xs12, sm3 )
          v-btn.app__btn.teal( dark, @click.native="onPrev()" )
            | prev
        v-flex.text-sm-right( xs12, sm3 offset-sm6, v-if="nextShow" )
          v-btn.app__btn.teal( dark, @click.native="onNext()" )
            | next
        v-flex.text-sm-right( xs12, sm3, offset-sm6, v-if="orderShow" )
          v-btn.app__btn.indigo( dark, @click.native.stop="onOrder()" )
            | make order

      v-snackbar( top, v-model="snackbar" )
        | {{ warning }}
        v-btn.pink--text( flat, @click.native="snackbar = false" )
          | close

      v-dialog( v-model="dialog", persistent )
        v-card
          v-card-title.headline
            | Спасибо за Ваш заказ!
          v-card-text.text-xs-center
            p.mb-2
              | Ваш заказ успешно отправлен.
            p.mb-0
              | Ожидайте звонок менеджера с подтверждением Вашего заказа.
          v-card-actions
            v-spacer
            v-btn.teal--text.darken-1( flat, @click.native="onClose()" )
              | назад

</template>

<script>
  import axios from 'axios'
  import eventBus from './main.js'
  import one from './components/one.vue'
  import two from './components/two.vue'
  import three from './components/three.vue'
  import four from './components/four.vue'
  import five from './components/five.vue'
  import six from './components/six.vue'

  export default {
    filters: {
      currency (value) {
        if (value === null) {
          return
        }
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
      }
    },
    data () {
      return {
        dialog: false,
        nextShow: true,
        orderShow: false,
        snackbar: false,
        warning: '',
        fixed: true,
        current: 'step1',
        active: 1,
        order: {
          time: {
            title: null,
            price: 0
          },
          service: {
            title: null,
            price: 0
          },
          cert: {
            title: null,
            price: 0
          },
          shipping: {
            title: null,
            price: 0
          },
          greeting: null,
          sum: null,
          customer: {
            name: null,
            phone: null,
            email: null
          }
        }
      }
    },
    methods: {
      onNext () {
        if (this.order.time.price === 0 && this.current === 'step1') {
          this.warning = 'Выберите длительность фотосессии'
          this.snackbar = true
          return
        }
        if (this.order.service.price === 0 && this.current === 'step2') {
          this.warning = 'Выберите дополнительные услуги'
          this.snackbar = true
          return
        }
        if (this.order.cert.price === 0 && this.current === 'step3') {
          this.warning = 'Выберите сертификат'
          this.snackbar = true
          return
        }
        if (this.order.shipping.price === 0 && this.current === 'step5') {
          this.warning = 'Выберите тип доставки'
          this.snackbar = true
          return
        }
        if (this.active < 6) {
          this.active += 1
          this.current = 'step' + this.active
        }
        if (this.active === 6) {
          this.nextShow = false
          this.orderShow = true
        }
      },
      onPrev () {
        if (this.active === 6) {
          this.nextShow = true
          this.orderShow = false
        }
        if (this.active > 1) {
          this.active -= 1
          this.current = 'step' + this.active
        }
      },
      onOrder () {
        if ((this.order.customer.name === null || this.order.customer.phone === null) && this.current === 'step6') {
          this.warning = 'Необходимо указать ваши Ф.И.О.'
          this.snackbar = true
          return
        }
        this.dialog = true
      },
      onClean () {
        for (let key in this.order) {
          delete this.order[key]
        }
      },
      onSend () {
        const root = 'https://jsonplaceholder.typicode.com'
        axios.post(root + '/posts', this.order)
          .then(response => {
            console.log(response)
          })
          .then(() => {
            this.onClearing()
          })
          .then(() => {
            eventBus.$emit('clear')
            eventBus.$emit('clrCustomer')
          })
          .then(() => {
            this.onBack()
          })
          .catch(error => {
            console.log(error)
          })
      },
      onClearing () {
        this.order.time.price = 0
        this.order.service.price = 0
        this.order.cert.price = 0
        this.order.shipping.price = 0
      },
      onBack () {
        this.dialog = false
        this.active = 1
        this.current = 'step' + this.active
        this.orderShow = false
        this.nextShow = true
      },
      onClose () {
        this.onSend()
      }
    },
    computed: {
      sum () {
        const result = this.order.time.price + this.order.service.price + this.order.cert.price + this.order.shipping.price
        this.order.sum = result
        return result
      }
    },
    components: {
      step1: one,
      step2: two,
      step3: three,
      step4: four,
      step5: five,
      step6: six
    },
    created () {
      eventBus.$on('time', data => {
        this.order.time.title = data.value
        this.order.time.price = data.price
      })
      eventBus.$on('service', data => {
        this.order.service.title = data.title
        this.order.service.price = data.price
      })
      eventBus.$on('cert', data => {
        this.order.cert.title = data.title
        this.order.cert.price = data.price
      })
      eventBus.$on('greeting', data => {
        this.order.greeting = data
      })
      eventBus.$on('shipping', data => {
        this.order.shipping.title = data.title
        this.order.shipping.price = data.price
      })
      eventBus.$on('name', data => {
        this.order.customer.name = data
      })
      eventBus.$on('phone', data => {
        this.order.customer.phone = data
      })
      eventBus.$on('email', data => {
        this.order.customer.email = data
      })
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  .app

    &__tabs
      padding-left 0 !important
      padding-right 0 !important

    &__caption
      text-transform uppercase !important

    &__output
      height 312px !important
      display flex !important
      align-items center !important


  @media screen and ( max-width: 600px )
    
    .app__btns
      text-align center

    .app__btn
      width 90%

</style>
