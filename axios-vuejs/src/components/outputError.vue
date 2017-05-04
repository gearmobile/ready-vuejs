<template lang="pug">
  .output-error
    .panel-body
      h3.output-error__title result
      h4.output-error__subtitle status
      pre {{ status }}
      h4.output-error__subtitle error message
      pre {{ message }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'output-error',
    data () {
      return {
        status: '',
        message: ''
      }
    },
    created () {
      eventBus.$on('getError', payload => {
        this.status = payload[0]
        this.message = payload[1]
        console.log(payload)
      })
    }
  }
</script>

<style lang="scss">
  .output-error {

    &__title {
      font-weight: 700;
      text-transform: capitalize;
    }

    &__subtitle {
      font-weight: 700;
      text-transform: capitalize;

      &::after {
        content: ':'
      }
    }
  }
</style>
