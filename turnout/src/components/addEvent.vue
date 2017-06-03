<template lang="pug">
  #addevent
    h4.text-center Add an Event <input type="checkbox" v-model="isShow">
    form.form( v-if="isShow" )
      .form-group
        label.text-capitalize( for="title" ) title
        input.form-control( type="text", id="title", v-model="event.title" )
      .form-group
        label.text-capitalize( for="description" ) description
        input.form-control( type="text", id="description", v-model="event.description" )
      .form-group
        label.text-capitalize( for="date" ) date
        input.form-control( type="date", id="date", v-model="event.date" )
      .form-group
        label.text-capitalize( for="location" ) location
        input.form-control( type="text", id="location", v-model="event.location" )
      .form-group.text-center
        button.btn.btn-primary.btn-sm.text-capitalize( type="button", @click="addEvent()" ) add event
</template>

<script>
  import { eventRef } from '../data/firebase.js'

  export default {
    name: 'addevent',
    data () {
      return {
        event: {
          title: '',
          description: '',
          date: '',
          location: '',
          email: ''
        },
        isShow: false
      }
    },
    methods: {
      clearForm (value) {
        for (let key in value) {
          value[key] = ''
        }
      },
      addEvent () {
        this.event.email = this.$store.state.user.email
        eventRef.push(this.event)
        this.clearForm(this.event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
