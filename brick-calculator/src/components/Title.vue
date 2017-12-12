<template lang="pug">

  v-card
    v-card-media( height="400px", src="/static/logo-01.jpg" )
      v-container( fill-height, fluid )
        v-layout( fill-height )
          v-flex( xs12, align-end, flexbox )
            span.display-1.header
              | {{ $t('title.caption') }}

</template>

<script>
  export default {
    name: 'Title'
  }
</script>

<style lang="stylus" scoped>
  //
</style>

