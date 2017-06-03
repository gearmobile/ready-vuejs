<template lang="pug">
  .col-md-4
    .event-card.text-center
      h4.event-title {{ event.title }}
      p.card-text {{ event.description }}
      ul.list-group.list-group-flush
        li.list-group-item Date: {{ event.date }}
        li.list-group-item Location: {{ event.location }}
        li.list-group-item Host: {{ event.email }}
</template>

<script>
  export default {
    name: 'eventitem',
    props: ['event']
  }
</script>

<style lang="scss" scoped>
  .event-card {
    border: 2px solid #2c3e50;
    margin-top: 20px;
    border-radius: 4px;
    padding-right: 10px;
    padding-left: 10px;
  }
</style>
