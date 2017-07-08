<template lang="pug">
  #app.translator.text-center
    .container.translator__container
      .row.translator__row
        .col-md-8.col-md-offset-2.translator__column
          h1.page-header.translator__title
            | {{ title }}
          h4.page-header.translator__subtitle
            | {{ subtitle1 }}
          h4.page-header.translator__subtitle
            | {{ subtitle2 }}
      .row
        .col-md-8.col-md-offset-2.translator__column
          appInputTranslate( @sendText="sendRequest" )
      .row
        .col-md-8.col-md-offset-2.translator__column
          appOutputTranslate( :outputText="textTranslated" )
</template>

<script>
  import inputTranslate from './components/inputTranslate.vue'
  import outputTranslate from './components/outputTranslate.vue'

  export default {
    name: 'app',
    data () {
      return {
        title: 'yandex word translator',
        subtitle1: 'Powered by Vue.js and Booswatch',
        subtitle2: 'Translation from English to any other language. Enter a word you want to translate and select the desired language from the list',
        textTranslated: ''
      }
    },
    methods: {
      sendRequest (value, language) {
        this.axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170407T073200Z.87326d01e2890332.ce114330ab323decb916a482270e20aebdbe5708&text=' + value + '&lang=' + language)
          .then(response => {
            this.textTranslated = response.data.text[0]
          })
      }
    },
    components: {
      appInputTranslate: inputTranslate,
      appOutputTranslate: outputTranslate
    }
  }
</script>

<style lang="scss">

  .translator {

    &__title {
      text-transform: capitalize;
      font-weight: 700;
      font-size: 30px;
      color: forestgreen;
      margin-bottom: 0;
    }

    &__subtitle {
      margin-top: 0;
      font-size: 15px;
      line-height: 1.4;
      color: rgba( 0,0,0, .6 )
    }
  }

</style>
