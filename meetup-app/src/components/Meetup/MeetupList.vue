<template lang="pug">
  
  v-container( grid-list-md )
    v-layout.mb-3( row, v-for="(meetup, index) in meetups", :key="index" )
      v-flex( xs12, sm10, offset-sm1, md8, offset-md2 )
        v-card.info
          v-container( fluid )
            v-layout( row, wrap )
              
              v-flex( xs12, sm4, md3 )
                v-card-media( :src="meetup.src", height="125px" )
              
              v-flex( xs12, sm8, md9 )
                v-card-title( primary-title )
                  section
                    h5.white--text.mb-1
                      | {{ meetup.title }}
                    article.pl-2
                      | {{ meetup.date }} {{ meetup.time }}
                v-card-actions
                  v-btn( flat, color="white", :to="'/meetupdetails/' + meetup.id" )
                    v-icon.white--text( left, light )
                      | arrow_forward
                    | view meetup
</template>

<script>
  export default {
    name: 'MeetupList',
    computed: {
      meetups () {
        return this.$store.getters.getMeetupsSorted
      },
      loading () {
        return this.$store.getters.getLoading
      }
    }
  }
</script>
