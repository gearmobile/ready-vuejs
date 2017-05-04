<template lang="pug">
  .output-success
    .panel-body
      h3.output-success__title result
      h4.output-success__subtitle status
      pre {{ status }} {{ statusText }}
      h4.output-success__subtitle headers
      pre {{ header }}
      h4.output-success__subtitle data
      pre {{ datas }}
</template>

<script>
  import eventBus from '../main.js'
  
  export default {
    name: 'output-success',
    data () {
      return {
        status: '',
        statusText: '',
        header: '',
        datas: ''
      }
    },
    created () {
      eventBus.$on('getSuccess', (value1, value2, value3, value4) => {
        this.status = value1
        this.statusText = value2
        this.header = value3
        this.datas = value4
        // console.log(payload)
      })
    }
  }
</script>

<style lang="scss">
  .output-success {

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
