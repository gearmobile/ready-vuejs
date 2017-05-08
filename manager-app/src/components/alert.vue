<template lang="pug">
  #alert.alert.alert-warning.alert-dismissible( role="alert" )
    button.close( type="button", data-dismiss="alert", aria-label="Close" )
      span( aria-hidden="true", @click="onClear()" ) &times;
    <strong>Warning!</strong> Customer <strong>{{ firstName }} {{ lastName }}</strong> was {{ message }}!
</template>

<script>
  export default {
    name: 'alert',
    props: {
      firstName: {
        type: String,
        default: ''
      },
      lastName: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      }
    },
    methods: {
      onClear () {
        this.$emit('onChange')
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
