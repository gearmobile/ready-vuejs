<template lang="pug">
  #alert.alert.alert-warning.alert-dismissible( role="alert" )
    button.close( type="button", data-dismiss="alert", aria-label="Close" )
      span( aria-hidden="true" ) &times;
    <strong>Warning!</strong> {{ message }}
</template>

<script>
  export default {
    name: 'warning',
    props: {
      message: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
