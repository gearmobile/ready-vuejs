<template lang="pug">
  section.section.projects
    h2.section__title {{ msg }}
</template>

<script>
  export default {
    name: 'projects',
    data () {
      return {
        msg: 'projects'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .projects {
    background-color: rgba( 242, 199, 48, 1 );
  }
</style>
