<template lang="pug">
  section.section.contacts
    h2.section__title {{ msg }}
</template>

<script>
  export default {
    name: 'contacts',
    data () {
      return {
        msg: 'contacts'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contacts {
    background-color: rgba( 126, 102, 241, 1 );
  }
</style>
