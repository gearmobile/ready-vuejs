<template lang="pug">
  #dashboard
    h3.text-capitalize.page-header.text-center dashboard events
    div.clearfix
      button.btn.btn-danger.btn-sm.text-capitalize.pull-right( type="button", @click="signOut()" ) sign out
    hr
    app-add-event
    hr
    app-event-item( v-for="(eventItem, index) in this.$store.state.events", :key="index", :event="eventItem" )
</template>

<script>
  import { firebaseApp, eventRef } from '../data/firebase.js'
  import AddEvent from '../components/addEvent.vue'
  import EventItem from '../components/eventitem.vue'

  export default {
    name: 'dashboard',
    methods: {
      signOut () {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    },
    components: {
      appAddEvent: AddEvent,
      appEventItem: EventItem
    },
    mounted () {
      eventRef.on('value', snap => {
        let events = []
        snap.forEach(event => {
          events.push(event.val())
        })
        this.$store.dispatch('setEvents', events)
      })
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
