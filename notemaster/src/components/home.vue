<template lang="pug">
  #home
    h1.text-center NoteMaster

    // INPUT SECTION
    form
      .form-group
        label( for="title" ) Note Title
        input.form-control( type="text", id="title", v-model.trim="note.title", autofocus, required )
      .form-group
        label( for="text" ) Note Text
        textarea.form-control( id="text", rows="5", v-model.trim="note.body", required )
      .form-group
        button.btn.btn-primary( type="button", @click="onSendData()" ) Submit

    // OUTPUT SECTION
    .row
      app-card( v-for="(note, index) in notes", :key="index", :note="note" )

</template>

<script>
  import Card from './card.vue'
  import eventBus from '../main.js'

  export default {
    name: 'home',
    data () {
      return {
        note: {
          title: null,
          body: null
        },
        notes: []
      }
    },
    methods: {
      onSendData () {
        if (!this.note.title || !this.note.body) {
          alert('Please fill both fields!')
        } else {
          this.notes.push({
            title: this.note.title,
            date: this.onDate(),
            body: this.note.body
          })
          this.clearForm(this.note)
        }
      },
      // HELPER FUNCTIONS
      onDate () {
        return new Date(Date.now()).toLocaleString('en-US')
      },
      onDelete (value) {
        this.notes.splice(this.notes.indexOf(value), 1)
      },
      clearForm (object) {
        for (let key in object) {
          object[key] = null
        }
      }
    },
    components: {
      appCard: Card
    },
    created () {
      eventBus.$on('onRemove', data => {
        this.onDelete(data)
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
