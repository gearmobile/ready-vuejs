<template lang="pug">
  
  v-container( grid-list-md )
    
    // CONTROLS CAROUSEL
    v-layout.mb-2( row, wrap )
      v-flex.text-xs-center.text-sm-right( xs12, sm6 )
        v-btn( color="info", large, to="/meetuplist" )
          | explore meetups
      v-flex.text-xs-center.text-sm-left( xs12, sm6 )
        v-btn( color="info", large, to="/meetupnew" )
          | organize meetups
    
    // SPIN SECTION
    v-layout.my-2( v-if="loading", justify-center )
      v-progress-circular( indeterminate, color="primary", :width="7", :size="70" )

    // CAROUSEL
    v-layout.mb-2( v-else )
      v-carousel
        v-carousel-item( style="cursor: pointer", v-for="(meetup, index) in meetups", transition="fade", reverseTransition="fade", :src="meetup.src", :key="index", @click="onClickHandler(meetup.id)" )
          .carousel-caption
            | {{ meetup.title }}

</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Start',
    computed: {
      ...mapGetters({
        meetups: 'getMeetupsShort',
        loading: 'getLoading'
      })
    },
    methods: {
      onClickHandler (meetupID) {
        this.$router.push({ path: '/meetupdetails/' + meetupID })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .carousel-caption {
    position: absolute;
    background-color: rgba( 0,0,0, .5 );
    color: white;
    bottom: 60px;
    font-size: 2rem;
    line-height: 1;
    text-transform: capitalize;
    padding: 20px 30px;
  }

    @media only screen and (max-width: 400px) {
      .carousel-caption {
        font-size: 1.4rem;
      }
    }

</style>
