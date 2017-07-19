<template lang="pug">
  
  v-app.app

    v-container
      v-flex( md8, offset-md2 )

        // HEADLINE

        v-layout( row )
          
          // TITLE

          v-flex( xs12 )
            h2.display-2.text-xs-center.mb-4.teal--text.darken-4.app__caption
              | Расчет количества бетона <span class="hidden-sm-and-down">для фундамента</span>

        // TYPE

        v-card.mb-4.pa-4.grey.lighten-4

          h2.display-1.text-xs-center.mb-4.teal--text.hidden-xs-only
            | Тип фундамента

          v-layout.app__center( row, wrap )
            v-flex( xs12, md4 )
              v-subheader
                | Тип фундамента
            v-flex.app__nav( xs12, md8 )
              v-btn.teal--text.darken-2( outline, :class="{ 'app__button--active': item === type }", v-for="(item, index) in types", :key="item", :value="item", :disabled="disable", @click.native="onShow(item)" )
                | {{ 'type ' + (index + 1) }}

        // MAIN

        v-card.mb-4.pa-4.grey.lighten-4

          h2.display-1.text-xs-center.mb-4.teal--text.hidden-xs-only
            | Размеры фундамента

          // SIDE A

          v-layout.app__baseline( row, wrap )
            v-flex( xs12, sm4 )
              v-subheader
                | Длина стороны А, м
            v-flex( xs12, sm8 )
              v-text-field( id="sideA", name="sideA", title="Введите длину фундамента", label="Сторона А", v-model.trim="basement.sideA", @input="$v.basement.sideA.$touch()", hide-details, required )
              span.red--text( v-if="!$v.basement.sideA.numeric" )
                | В поле должны быть только цифры!

          // SIDE B
          
          v-layout.app__baseline( row, wrap )
            v-flex( xs12, sm4 )
              v-subheader
                | Длина стороны B, м
            v-flex( xs12, sm8 )
              v-text-field( id="sideB", name="sideB", title="Введите ширину фундамента", label="Сторона B", v-model.trim="basement.sideB", @input="$v.basement.sideB.$touch()", hide-details, required )
              span.red--text( v-if="!$v.basement.sideB.numeric" )
                | В поле должны быть только цифры!

          // SIDE C
          
          v-layout.app__baseline( row, wrap )
            v-flex( xs12, sm4 )
              v-subheader
                | Высота ленты C, м
            v-flex( xs12, sm8 )
              v-text-field( id="sideC", name="sideC", title="Введите высоту фундамента", label="Высота C", v-model.trim="basement.sideC", @input="$v.basement.sideC.$touch()", hide-details, required )
              span.red--text( v-if="!$v.basement.sideC.numeric" )
                | В поле должны быть только цифры!

          // SIDE D
          
          v-layout.app__baseline( row, wrap )
            v-flex( xs12, sm4 )
              v-subheader
                | Толщина ленты D, см
            v-flex( xs12, sm8 )
              v-text-field( id="sideD", name="sideD", title="Введите толщину фундамента", label="Толщина D", v-model.trim="basement.sideD", @input="$v.basement.sideD.$touch()", hide-details, required )
              span.red--text( v-if="!$v.basement.sideD.numeric" )
                | В поле должны быть только цифры!

        // PREVIEW

        v-card.mb-4.pa-4.grey.lighten-4

          h2.display-1.text-xs-center.mb-4.teal--text.hidden-xs-only
            | Схема фундамента

          v-layout( row )
            v-flex( xs12 )
              v-card
                v-card-media.app__preview( :src="imagePath", contain )

        // ADDITIONAL

        v-card.mb-4.pa-4.grey.lighten-4

          h2.display-1.text-xs-center.mb-4.teal--text.hidden-xs-only
            | Плита и перекрытие

          // FOOTER
          
          v-container
            v-layout.app__center( row, wrap )
              v-flex( xs12, sm4 )
                v-subheader
                  | Добавить плиту основание
              v-flex( xs12, sm8 )
                v-checkbox( v-model="footer.status", hide-details )
            v-slide-y-transition( mode="out-in" )
              v-container( v-if="footer.status" )
                v-layout.app__center( row, wrap )
                  v-flex( xs12, sm4 )
                    v-subheader
                      | Толщина плиты, см
                  v-flex( xs12, sm8 )
                    v-text-field( id="footer", name="footer", title="Введите толщину плиты", v-model.trim="footer.value", @input="$v.footer.value.$touch()", hide-details )
                    span.orange--text( v-if="!$v.footer.value.required" )
                      | Введите в поле значение!
                    span.red--text( v-if="!$v.footer.value.between" )
                      | Толщина должна быть от 25 до 40см
                v-layout.mt-2
                  v-flex( xs12, style="display: flex; align-items: center;" )
                    v-icon.mr-2.teal--text.text--darken-2
                      | error_outline
                    p.mb-0.teal--text
                      | Рекомендуемая толщина от 25 до 40 см

          // HEADER
          
          v-container
            v-layout.app__center( row, wrap )
              v-flex( xs12, sm4 )
                v-subheader
                  | Добавить плиту перекрытие
              v-flex( xs12, sm8 )
                v-checkbox( v-model="header.status", hide-details )
            v-slide-y-transition( mode="out-in" )
              v-container( v-if="header.status" )
                v-layout.app__center( row, wrap )
                  v-flex( xs12, sm4 )
                    v-subheader
                      | Толщина плиты, см
                  v-flex( xs12, sm8 )
                    v-text-field( id="header", name="header", title="Введите толщину плиты", v-model.trim.number="header.value", @input="$v.header.value.$touch()", hide-details )
                    span.orange--text( v-if="!$v.header.value.required" )
                      | Введите в поле значение!
                    span.red--text( v-if="!$v.header.value.between" )
                      | Толщина должна быть от 18 до 22см!
                v-layout.mt-2
                  v-flex.app__justify( xs12 )
                    v-icon.mr-2.teal--text.text--darken-2
                      | error_outline
                    p.mb-0.teal--text
                      | Рекомендуемая толщина от 18 до 22см

          // MARK
          
          v-container
            v-layout.app__center( row, wrap )
              v-flex( xs12, sm4 )
                v-subheader
                  | Марка бетона
              v-flex( xs12, sm8 )
                v-select( :items="marks", label="Выберите марку бетона", v-model="mark", item-text="name", item-value="price", return-object, single-line, bottom, hide-details )
            v-layout.app__center( row, wrap )
              v-flex.app__justify( xs12 )
                v-icon.mr-2.teal--text.text--darken-2
                  | error_outline
                p.mb-0.teal--text
                  | Рекомендуемая марка м300-м350

        // OUTPUT
        
        v-card.pa-4.grey.lighten-4

          h2.display-1.text-xs-center.mb-4.teal--text
            | Результаты

          v-container
            
            v-layout.mb-4( row, wrap )
              v-flex( xs12, sm4 )
                p.mb-1.subheading
                  | Потребуется, куб.м бетона
              v-flex( xs12, sm8 )
                span.teal--text.title
                  | {{ output | meters }}

            v-layout.mb-4( row, wrap )
              v-flex( xs12, sm4 )
                p.mb-1.subheading
                  | Марка бетона
              v-flex( xs12, sm8 )
                span.teal--text.title
                  | {{ mark.name }}

            v-layout( row, wrap )
              v-flex( xs12, sm4 )
                p.mb-1.subheading
                  | Всего на сумму, руб
              v-flex( xs12, sm8 )
                span.teal--text.title
                  | {{ sum | currency }}

            // ORDER BUTTON

            v-layout.mt-4( row, v-if="showOrder" )
              v-flex.text-xs-center( xs12 )
                v-btn.teal.white--text( @click.native.stop="dialog = true" )
                  | Оформить заказ

                // DIALOG SECTION

                v-dialog( v-model="dialog", persistent, width="600px" )
                  v-card.app__dialog.text-sm-center
                    v-card-title
                      span.headline.teal--text
                        | Оформление заказа
                    v-card-text
                      v-text-field( label="Имя", name="name", prepend-icon="account_box", v-model.trim="order.name", @input="$v.order.name.$touch()", required )
                      p.orange--text( v-if="!$v.order.name.required" )
                        | Введите в поле значение!
                      v-text-field( label="Телефон", name="phone", prepend-icon="phone", v-model.trim="order.phone", @input="$v.order.phone.$touch()", required )
                      p.orange--text( v-if="!$v.order.phone.required" )
                        | Введите в поле значение!
                      p.red--text( v-if="!$v.order.phone.numeric" )
                        | В поле должны быть только цифры!
                      v-text-field( label="Email", name="email", prepend-icon="email", v-model.trim="order.email", @input="$v.order.email.$touch()" )
                      p.red--text( v-if="!$v.order.email.email" )
                        | Введите правильный email!
                      v-text-field( label="Адрес доставки", name="address", v-model.trim="order.address", multi-line )
                    v-card-actions
                      v-spacer
                      v-btn.teal--text.darken-1( flat, @click.native="onCancel()" )
                        | отменить
                      v-btn.teal--text.darken-1( flat, @click.native="onSend()" )
                        | отправить

</template>

<script>
  import { required, between, numeric, email } from 'vuelidate/lib/validators'
  import axios from 'axios'
  const root = 'http://localhost:3000'

  export default {
    filters: {
      meters (value) {
        return value.toFixed(2)
      },
      currency (value) {
        if (value === null) {
          return
        }
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
      }
    },
    validations: {
      footer: {
        value: {
          required,
          between: between(25, 40)
        }
      },
      header: {
        value: {
          required,
          between: between(18, 22)
        }
      },
      basement: {
        sideA: {
          numeric
        },
        sideB: {
          numeric
        },
        sideC: {
          numeric
        },
        sideD: {
          numeric
        }
      },
      order: {
        name: {
          required
        },
        phone: {
          required,
          numeric
        },
        email: {
          email
        }
      }
    },
    data () {
      return {
        dialog: false,
        fixed: true,
        disable: false,
        type: 'basement1',
        types: [
          'basement1',
          'basement2',
          'basement3',
          'basement4',
          'basement5'
        ],
        basement: {
          sideA: null,
          sideB: null,
          sideC: null,
          sideD: null,
          allowance: 0.2
        },
        footer: {
          value: 25,
          status: false
        },
        header: {
          value: 18,
          status: false
        },
        mark: { name: 'm100', price: 3400 },
        marks: [
          { name: 'm100', price: 3400 },
          { name: 'm150', price: 3550 },
          { name: 'm200', price: 3750 },
          { name: 'm250', price: 3850 },
          { name: 'm300', price: 3950 },
          { name: 'm350', price: 4050 },
          { name: 'm400', price: 4600 },
          { name: 'm450', price: 4850 },
          { name: 'm500', price: 5000 },
          { name: 'm550', price: 5050 },
          { name: 'm600', price: 5200 },
          { name: 'm650', price: 5500 }
        ],
        order: {
          name: null,
          phone: null,
          email: null,
          address: null
        }
      }
    },
    methods: {
      onShow (value) {
        console.log(value)
        this.type = value
      },
      onCancel () {
        this.dialog = false
      },
      onSend () {
        axios.post(root + '/users', this.order)
          .then(response => {
            console.log(response)
            for (let key in this.order) {
              this.order[key] = null
            }
            this.dialog = false
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    computed: {
      showOrder () {
        return !(this.sideA === 0 || this.sideB === 0 || this.sideC === 0 || this.sideD === 0)
      },
      date () {
        return new Date().getFullYear()
      },
      imagePath () {
        let path
        if (this.footer.status) {
          path = 'basement6'
          this.disable = true
        }
        if (this.header.status) {
          path = 'basement7'
          this.disable = true
        }
        if (this.footer.status && this.header.status) {
          path = 'basement8'
          this.disable = true
        }
        if (!this.footer.status && !this.header.status) {
          path = this.type
          this.disable = false
        }
        return require('./assets/' + path + '.jpg')
      },
      sideA () {
        return (this.basement.sideA === null || typeof (this.basement.sideA) === 'undefined') ? 0 : parseInt(this.basement.sideA)
      },
      sideB () {
        return (this.basement.sideB === null || typeof (this.basement.sideB) === 'undefined') ? 0 : parseInt(this.basement.sideB)
      },
      sideD () {
        return (this.basement.sideD === null || typeof (this.basement.sideD) === 'undefined') ? 0 : parseInt(this.basement.sideD) * 0.01
      },
      sideC () {
        return (this.basement.sideC === null || typeof (this.basement.sideC) === 'undefined') ? 0 : parseInt(this.basement.sideC)
      },
      long () {
        const result = (this.sideA - this.sideD * 2) * this.sideD
        return result
      },
      short () {
        const result = this.sideD * ((this.sideB - this.sideD * 3) / 2)
        return result
      },
      base () {
        const result = this.sideA * this.sideB
        return result
      },
      head () {
        let result = 0
        if (this.header.status) {
          result = this.base * (this.header.value * 0.01)
        }
        return result
      },
      foot () {
        let result = 0
        if (this.footer.status) {
          const delta = this.basement.allowance * 2
          result = (this.sideA + delta) * (this.sideB + delta) * (this.footer.value * 0.01)
        }
        return result
      },
      s1 () {
        const outer = this.base
        const inner = (this.sideA - this.sideD * 2) * (this.sideB - this.sideD * 2)
        const result = outer - inner
        return result
      },
      s2 () {
        const result = this.s1 + this.long
        return result
      },
      s3 () {
        const result = this.s1 + this.long * 2
        return result
      },
      s4 () {
        const result = this.s2 + this.short
        return result
      },
      s5 () {
        const result = this.s2 + this.short * 2
        return result
      },
      output () {
        let result = 0
        switch (this.type) {
          case 'basement1':
            result = this.s1
            break
          case 'basement2':
            result = this.s2
            break
          case 'basement3':
            result = this.s3
            break
          case 'basement4':
            result = this.s4
            break
          case 'basement5':
            result = this.s5
            break
          default:
            result = 0
        }
        result *= this.sideC
        result += (this.head + this.foot)
        return result
      },
      sum () {
        const result = this.output * this.mark.price
        return result
      }
    }
  }
</script>

<style lang="stylus">

  @import './stylus/main'

  .app

    &__center
      align-items center !important

    &__baseline
      align-items baseline !important

    &__justify
      display flex !important
      align-items center !important

    &__nav
      display flex
      justify-content space-between

    &__preview
      height 500px !important

    &__button--active
      background-color #e0f2f1 !important

    &__dialog
      padding 30px !important

    // BP600

    @media screen and ( max-width 600px )

      .app__preview
        height 400px !important

      .app__nav
        flex-direction column

      .app__caption
        font-size 36px !important
        line-height 1.2 !important
        padding 0 1rem !important

      .app__dialog
        padding 10px !important

    // BP500

    @media screen and ( max-width 500px )

      .app__caption
        font-size 30px !important

    @media screen and ( max-width 400px )

      .app__preview
        height 300px !important

</style>
