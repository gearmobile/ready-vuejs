<template lang="pug">
  .input
    form.form-inline
      .form-group
        input.form-control( type="text", placeholder="Input word to translate", @keyup.enter="onSubmit" v-model="inputText" )
      .form-group
        select.form-control( v-model="selectedLanguage" )
          option( v-for="item in languages", :value="item.code" ) {{ item.title }}
      .form-group
        button.btn.btn-default( type="button", @click="onSubmit" ) translate!
</template>

<script>
  export default {
    name: 'input',
    data () {
      return {
        inputText: '',
        languages: [
          { title: 'Russian', code: 'ru' },
          { title: 'Spanish', code: 'es' },
          { title: 'Italian', code: 'it' },
          { title: 'German', code: 'de' },
          { title: 'Dutch', code: 'nl' },
          { title: 'Icelandic', code: 'is' },
          { title: 'Polish', code: 'pl' }
        ],
        selectedLanguage: 'ru'
      }
    },
    methods: {
      onSubmit () {
        this.$emit('sendText', this.inputText, this.selectedLanguage)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-inline {
    width: 100%;
  }
</style>
