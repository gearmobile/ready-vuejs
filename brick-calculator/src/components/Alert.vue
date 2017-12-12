<template lang="pug">

  v-snackbar( v-model="show", :top="true", :timeout="alert.timeout", :multi-line="true" )
    | {{ message }}
    v-btn( flat, color="error", @click.native="onClose()" )
      | {{ $t('alert.message') }}

</template>

<script>
  export default {
    name: 'Alert',
    data () {
      return {
        alert: {
          timeout: 5000
        }
      }
    },
    methods: {
      onClose () {
        this.$store.dispatch('closeAlert')
      }
    },
    computed: {
      show: {
        get () { return this.$store.getters.getOpeningStatus },
        set () { this.$store.dispatch('closeAlert') }
      },
      message: {
        get () { return this.$store.getters.getOpeningText }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

