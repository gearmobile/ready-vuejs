<template lang="pug">
  .player
    h1.page-header.text-center.text-capitalize soundcloud player
    h4.text-center.text-uppercase get any request: name, song, title and etc
    
    // SEARCH SECTION
    .row
      .col-md-8.col-md-offset-2
        form( @submit.prevent="getTracks()" )
          .form-group
            h3.text-center.text-capitalize track information
            input.form-control( type="text", v-model="search", placeholder="type here and click submit request", required )
          .form-group.text-center.player__control
            button.btn.btn-primary.text-capitalize( type="button", @click="getTracks()" ) submit request
            button.btn.btn-primary.text-capitalize( type="button", @click="clearTracks()" ) reset request
    
    // OUTPUT SECTION
    .row( v-if="tracks" )
      .col-md-8.col-md-offset-2
        app-playlist( v-for="(track, index) in tracks", :key="index", :track="track" )

    // CONTROLS
    .row
      .col-md-6.col-md-offset-3
        h3.text-center.text-capitalize player volume - {{ volume }}%
        .form-group
          input( type="range", min="0", max="100", step="2", v-model="volume", @input="changeVolume()" )
    .row
      .col-md-8.col-md-offset-2
        h3.text-center.text-capitalize player controls
        .button-group.text-center.player__control
          button.btn.btn-primary.text-uppercase( type="button", @click="onPrevious()" ) previous
          button.btn.btn-primary.text-uppercase( type="button", @click="onPause(currTrack)" ) pause
          button.btn.btn-primary.text-uppercase( type="button", @click="onPlay(currTrack)" ) play
          button.btn.btn-primary.text-uppercase( type="button", @click="onStop(currTrack)" ) stop
          button.btn.btn-primary.text-uppercase( type="button", @click="onNext()" ) next
</template>

<script>
  import SC from 'soundcloud'
  import Playlist from '../components/playlist.vue'
  import eventBus from '../main.js'

  SC.initialize({
    client_id: 'g79oUOmfBbcXJfZpFUVuqjR28Uu9O8TN'
  })

  export default {
    name: 'home',
    data () {
      return {
        pageSize: 5,
        tracks: [],
        search: null,
        currTrack: null,
        currTrackID: null,
        volume: 50
      }
    },
    components: {
      appPlaylist: Playlist
    },
    methods: {
      clearTracks () {
        this.tracks = []
        this.search = null
      },
      // GET LIST OF TRACKS
      getTracks () {
        const searchConfig = {
          q: this.search,
          limit: this.pageSize
        }
        SC.get('/tracks', searchConfig)
          .then(response => {
            this.tracks = response
            this.search = ''
          })
      },
      // GET CURRENT TRACK TO PLAY
      getTrack (value) {
        SC.stream('/tracks/' + value)
          .then(response => {
            this.currTrack = response
          })
      },
      // GET CURRENT TRACK ID TO PLAY
      getIndex (arr, obj) {
        this.currTrackID = arr.indexOf(obj)
      },
      // PLAY SOUNDTRACK
      onPlay (value) {
        value.play()
      },
      // PAUSE SOUNDTRACK
      onPause (value) {
        value.pause()
      },
      // STOP SOUNDTRACK
      onStop (value) {
        value.pause()
        value.seek(0)
      },
      // NEXT SOUNDTRACK
      onNext () {
        this.currTrackID = (this.currTrackID + 1 >= this.tracks.length) ? 0 : this.currTrackID + 1
        this.getTrack(this.tracks[this.currTrackID].id)
      },
      // PREVIOUS SOUNDTRACK
      onPrevious () {
        this.currTrackID = (this.currTrackID - 1 < 0) ? this.tracks.length - 1 : this.currTrackID - 1
        this.getTrack(this.tracks[this.currTrackID].id)
      },
      // ENCREASE\DECREASE SOUNDTRACK VOLUME
      changeVolume () {
        if (!this.currTrack) {
          return
        }
        this.currTrack.setVolume(this.volume / 100)
      }
    },
    created () {
      eventBus.$on('selectItem', data => {
        this.getTrack(data.id)
        this.getIndex(this.tracks, data)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles/range.css';

  .player {

    &__control {
      padding: .8rem 0;

      & button {
        margin-right: .2rem;
        margin-left: .2rem;
      }
    }
  }
</style>
