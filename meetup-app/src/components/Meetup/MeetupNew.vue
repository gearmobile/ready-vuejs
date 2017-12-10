<template lang="pug">
  
  v-container.mt-4( grid-list-md )
    
    v-layout.mb-4( row )
      v-flex( xs12, md6, offset-md3, sm8, offset-sm2 )
        h4
          | Create a New Meetup
    
    v-layout( row )
      v-flex( xs12, md6, offset-md3, sm8, offset-sm2 )
        form( @submit.prevent="onSubmitHandler()" )

          // TITLE SECTION
          v-layout.mb-4
            v-text-field(
              name="title",
              id="title",
              label="Title",
              color="pink",
              v-model="meetup.title",
              required,
              hide-details
            )

          // LOCATION SECTION
          v-layout.mb-4
            v-text-field(
              name="location",
              id="location",
              label="Location",
              color="pink",
              v-model="meetup.location",
              required,
              hide-details
            )

          // UPLOAD SECTION
          v-layout.mb-4( justify-center )
            v-btn(
              color="primary",
              @click="onTriggerHandler()",
              large
            )
              | upload image
            input(
              type="file",
              style="display: none",
              ref="fileInput",
              accept="image/*",
              @change="onFilePickHandler($event)"
            )
          v-layout.mb-4
            img(
              :src="meetup.src",
              :alt="meetup.title",
              style="width: 100%; height: auto;"
            )

          // DESCRIPTION SECTION
          v-layout.mb-4
            v-text-field(
              name="description",
              id="description",
              label="Description",
              color="pink",
              v-model="meetup.description",
              textarea,
              rows="6",
              required,
              hide-details
            )

          // DATE SECTION
          v-layout.mb-4( justify-center )
            v-date-picker(
              v-model="meetup.date",
              :landscape="$vuetify.breakpoint.mdAndUp"
            )

          // TIME SECTION
          v-layout.mb-4( justify-center )
            v-time-picker(
              v-model="meetup.time",
              format="24hr",
              :landscape="$vuetify.breakpoint.mdAndUp"
            )

          // CONTROL SECTION
          v-layout.mb-4( justify-center )
            v-btn( color="primary", :disabled="!formIsValid", type="submit", large )
              | create new meetup

</template>

<script>
  export default {
    name: 'MeetupNew',
    data () {
      return {
        meetup: {
          title: '',
          location: '',
          description: '',
          image: null,
          src: '',
          date: new Date(),
          time: new Date()
        }
      }
    },
    computed: {
      formIsValid () {
        return this.meetup.title !== '' && this.meetup.location !== '' && this.meetup.description !== '' && this.meetup.image !== ''
      }
    },
    methods: {
      onSubmitHandler () {
        if (this.meetup.image) {
          const meetup = {
            title: this.meetup.title,
            location: this.meetup.location,
            date: this.meetup.date,
            time: this.meetup.time,
            description: this.meetup.description,
            image: this.meetup.image
          }
          this.$store.dispatch('createNewMeetup', meetup)
          this.$router.push({ path: '/meetuplist' })
        }
      },
      onTriggerHandler () {
        this.$refs.fileInput.click()
      },
      onFilePickHandler (event) {
        const files = event.target.files
        if (files[0].name.lastIndexOf('.') <= 0) {
          return alert('Add a valid file')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.meetup.src = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.meetup.image = files[0]
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>