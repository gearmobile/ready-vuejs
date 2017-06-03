<template lang="pug">
  .item( @click="onSelect()" )
    ul.list-group.list-group-flush
      li.list-group-item.text-capitalize #[strong Track Title:] {{ track.title }}
      li.list-group-item.text-capitalize #[strong Genre:] {{ track.genre }}
      li.list-group-item.text-capitalize #[strong Release Year:] {{ track.release_year }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'playlist',
    props: ['track'],
    methods: {
      onSelect () {
        eventBus.$emit('selectItem', this.track)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    cursor: pointer;

    &:hover .list-group {
      background-color: rgba( 0,0,0, .4 );
    }
  }
</style>
