<template lang="pug">

  v-dialog( persistent, v-model="meetupEdit.dialog", max-width="600px" )
    v-btn( color="info", fab, dark, slot="activator" )
      v-icon
        | edit
    v-card
      v-container
        v-layout( row, wrap )
          v-flex( xs12 )
            h4.headline.mb-2.text-xs-center
              | Edit Meetup
        v-layout( row, wrap )
          v-flex( xs12 )
            v-card-text
              v-text-field(
                name="title",
                id="title",
                label="Title",
                v-model="meetupEdit.title",
                color="pink",
                required,
                hide-details
              )
              v-text-field(
                name="location",
                id="location",
                label="Location",
                color="pink",
                v-model="meetupEdit.location",
                textarea,
                rows="4",
                required,
                hide-details
              )
              v-text-field(
                name="description",
                id="description",
                label="Description",
                color="pink",
                v-model="meetupEdit.description",
                textarea,
                rows="4",
                required,
                hide-details
              )
        v-layout( row, wrap )
          v-flex( xs12 )
            v-card-actions
              v-spacer
              v-btn( flat, color="primary darken-2", @click.native="onClose()" )
                | cancel
              v-btn( flat, color="primary darken-2", @click.native="onSave()" )
                | save

</template>

<script>
  export default {
    name: 'MeetupDetailsEdit',
    props: {
      meetup: {
        type: Object,
        required: true,
        default () { return {} }
      }
    },
    data () {
      return {
        meetupEdit: {
          title: this.meetup.title,
          description: this.meetup.description,
          location: this.meetup.location,
          dialog: false
        }
      }
    },
    methods: {
      onSave () {
        if (this.meetupEdit.title === '' || this.meetupEdit.description === '') {
          return
        } else {
          const object = {
            title: this.meetupEdit.title,
            description: this.meetupEdit.description,
            location: this.meetupEdit.location,
            id: this.meetup.id
          }
          this.$store.dispatch('updateMeetup', object)
          this.onClose()
        }
      },
      onClose () {
        this.meetupEdit.dialog = false
      }
    }
  }
</script>

<style scoped>
  /**/
</style>

