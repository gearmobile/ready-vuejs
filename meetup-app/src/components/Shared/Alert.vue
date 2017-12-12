<template lang="pug">
  v-alert( color="error", icon="warning", dismissible, @input="onClose()", :value="true" )
    | {{ alertMessage }}
</template>

<script>
  export default {
    name: 'Alert',
    props: {
      alertMessage: {
        type: String,
        default: ''
      }
    },
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>

