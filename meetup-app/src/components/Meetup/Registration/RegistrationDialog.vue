<template lang="pug">

  v-dialog( persistent, v-model="dialog.show" )

    // TRIGGER DIALOG
    v-btn( :color="registerColor", dark, large, slot="activator" )
      | {{ registerLabel }}

    // CONTENT SECTION
    v-card
      v-container
        
        v-layout.mb-2
          v-card-title
            h5.mb-0( v-if="userIsRegistered" )
              | Unregister from Meetup?
            h5.mb-0( v-else )
              | Register for Meetup?
        
        v-divider
        
        v-layout.mb-2
          v-card-text
            | You can always change your decision later on

        v-layout.mb-2
          v-card-actions
            v-btn( flat, color="red darken-1", @click="onCloseHandler()" )
              | cancel
            v-btn( flat, color="green darken-1", @click="onSaveHandler()" )
              | confirm

</template>

<script>
  export default {
    name: 'RegistartionDialog',
    props: {
      meetupID: {
        type: String,
        required: true,
        default () { return '' }
      }
    },
    data () {
      return {
        dialog: {
          show: false
        }
      }
    },
    computed: {
      userIsRegistered () {
        return this.$store.getters.getExistingUser.meetups.findIndex(el => el === this.meetupID) >= 0
      },
      registerLabel () {
        return this.userIsRegistered ? 'Unregister' : 'Register'
      },
      registerColor () {
        return !this.userIsRegistered ? 'primary darken-1' : 'pink lighten-1'
      }
    },
    methods: {
      onSaveHandler () {
        const IDMeetup = this.meetupID
        // console.log(IDMeetup)
        if (this.userIsRegistered) {
          this.$store.dispatch('unregisterUserMeetup', IDMeetup)
        } else {
          this.$store.dispatch('registerUserMeetup', IDMeetup)
        }
        this.onCloseHandler()
      },
      onCloseHandler () {
        this.dialog.show = false
      }
    }
  }
</script>
