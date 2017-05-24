<template lang="pug">
  .col-sm-6
    .card-deck
      .card.card-outline-secondary
        a.close.box__button( @click="onClose()" ) &times;
        .card-block
          h4.card-title.text-capitalize {{ note.title }}
          h6.card-subtitle.text-muted.mb-2 {{ note.date }}
          p.card-text {{ note.body }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    props: {
      note: {
        type: Object,
        default: null
      }
    },
    methods: {
      onClose () {
        eventBus.$emit('onRemove', this.note)
      }
    }
  }
</script>

<style scoped>
  .card {
    margin-bottom: 1.6rem;
  }
  .box__button {
    text-align: right;
    padding-right: 10px;
    padding-top: 4px;
  }
</style>
