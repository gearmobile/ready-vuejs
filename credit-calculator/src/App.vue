<template lang="pug">
  #app
    
    // HEADER
    .container
      .grid.header
        .col-md-5
          .grid
            .col-6
              | Сумма, руб
            .col-6.ta-r
              | {{ summ.current | currencyFilter }}
          .grid
            .col-12
              vue-slider( v-model="summ.current", :min="summ.min", :max="summ.max", :tooltip="false", :lazy="true", :bg-style="sliderStyle", :process-style="processStyle", :height="2" )
        .col-md-2.ta-c
          | <span class="percent">{{ percent | precentFilter }}</span> #[br] Процентная ставка
        .col-md-5
          .grid
            .col-6
              | Срок, лет
            .col-6.ta-r
              | {{ year.current }}
          .grid
            .col-12
              vue-slider( v-model="year.current", :min="year.min", :max="year.max", :tooltip="false", :lazy="true", :bg-style="sliderStyle", :process-style="processStyle", :height="2" )
      
      .container.section
        .section__primary
          .grid
            .col-xs-6
              | Сумма кредита:
            .col-xs-6.ta-r
              | {{ summ.current | currencyFilter }}
          .grid
            .col-xs-6
              | Срок кредита:
            .col-xs-6.ta-r
              | {{ year.current | yearsFilter }}
          .grid
            .col-xs-6
              | Ежемесячный платеж:
            .col-xs-6.ta-r
              | {{ paymentTotal | currencyFilter }}
        .section__secondary
          .grid
            .col-sm-4
              input.input.input__text( type="text", v-model="user.name" placeholder="Фамилия, имя, отчество *" )
            .col-sm-4
              input.input.input__text( type="tel", v-model="user.phone", placeholder="Номер телефона *" )
            .col-sm-4
              button.input.input__button( type="button" )
                | Получить кредит
</template>

<script>
  import vueSlider from 'vue-slider-component'
  export default {
    name: 'app',
    data () {
      return {
        summ: {
          min: 500000,
          max: 3000000,
          current: 1000000
        },
        year: {
          min: 1,
          max: 15,
          current: 5
        },
        user: {
          name: '',
          phone: ''
        },
        percent: 10.3,
        sliderStyle: {
          'backgroundColor': 'dimgray'
        },
        processStyle: {
          'backgroundColor': 'red'
        }
      }
    },
    computed: {
      paymentTotal () {
        const clean = this.summ.current / (this.year.current * 12)
        const percent = clean * (this.percent / 100)
        const result = clean + percent
        return result
      }
    },
    filters: {
      precentFilter (value) {
        return value.toLocaleString('ru-RU') + '%'
      },
      currencyFilter (value) {
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
      },
      yearsFilter (value) {
        let suffix = ''
        if (value === 1) {
          suffix = ' год'
        }
        if (value <= 4 && value >= 2) {
          suffix = ' года'
        }
        if (value >= 5) {
          suffix = ' лет'
        }
        return value + suffix
      }
    },
    components: {
      vueSlider
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    font-size: 18px;
  }
  .ta-r {
    text-align: right;
  }
  .ta-c {
    text-align: center;
  }
  .percent {
    font-size: 3rem;
  }
  .header {
    margin-bottom: 2rem;
  }
  .section {
    background-color: lightgrey;
    border-radius: 4px;
    padding-top: 1rem;
    padding-bottom: 1rem;

    &__primary {
      border-bottom: 1px solid red;
      padding-top: 1rem;
    }

    &__secondary {
      padding-top: 1rem;
    }
  }
  .input {
    width: 100%;
    border: none;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 4px;
    font-size: 1.2rem;
    outline: none;

    &__text {
      padding-left: 10px;
      padding-right: 10px;
    }

    &__button {
      background-color: red;
      color: white;
      cursor: pointer;
    }
  }
</style>
