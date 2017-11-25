<template lang="pug">

  v-dialog( persistent, v-model="meetupEdit.show", max-width="400px" )
    
    // DIALOG TRIGGER
    v-btn( color="info", dark, slot="activator" )
      | edit time

    // CONTENT SECTION
    v-card
      v-container
        
        v-layout.mb-2
          v-card-title
            h5.mb-0
              | Edit Meetup Time

        v-divider
        
        v-layout.mb-2
          v-time-picker( v-model="meetupEdit.time", actions, format="24hr", style="width: 100%" )
            template( scope="{ save, cancel }" )
              v-btn( color="primary darken-3", flat, @click.native="onCloseHandler()" )
                | cancel
              v-btn( color="primary darken-3", flat, @click.native="onSaveHandler()" )
                | save

</template>

<script>
  export default {
    name: 'MeetupDetailsEditTime',
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
          show: false,
          time: this.meetup.time
        }
      }
    },
    methods: {
      onSaveHandler () {
        const newTime = {
          time: this.meetupEdit.time,
          id: this.meetup.id
        }
        this.$store.dispatch('updateMeetup', newTime)
        this.onCloseHandler()
      },
      onCloseHandler () {
        this.meetupEdit.show = false
      }
    }
  }
</script>
