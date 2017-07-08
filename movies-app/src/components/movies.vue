<template lang="pug">
  
  // MOVIE
  #movie.movie

    // SECTION LOGO
    figure.movie__logo
      img( src="../assets/imdb.png" )

    // HEADER SECTION
    .columns.movie__header
      .column
        nav.nav
          .nav-center.has-text-centered
            h1.title.is-1 MovieInfo

    // SEARCH SECTION
    .columns.movie__search
      .column
        .panel
          .panel-heading.has-text-centered
            h3.title.is-3.movie__title search movie
          .panel-block
            p.control.has-icons-left
              input.input( type="text", placeholder="Start Search Movie Here ...", v-model.lazy.trim="searchValue", @change.prevent="onSearch" )
              span.icon.is-small.is-left
                i.fa.fa-search

    // OUTPUT SECTION
    .columns.is-multiline.movie__output
      .column.is-one-third-tablet.is-one-quarter-desktop( v-for="movie in movies" )
        .card.movie__card
          .card-image
            figure.image
              img( :src="movie.Poster", :alt="movie.Title" )
          .card-content
            .content.has-text-centered
              h4.title.is-4 {{ movie.Title  }}
              a.button.is-primary.is-outlined( href="#", @click.prevent="onPass(movie.imdbID)" ) Movie Details
</template>

<script>
  import axios from 'axios'
  
  const url = 'http://www.omdbapi.com'

  export default {
    name: 'movie',
    data () {
      return {
        searchValue: '',
        movies: []
      }
    },
    methods: {
      onSearch () {
        axios.get(url + '?s=' + this.searchValue)
          .then(response => {
            this.movies = response.data.Search
            this.searchValue = ''
          })
          .catch(error => {
            console.log(error)
          })
      },
      onPass (id) {
        this.$router.push({ path: '/details/' + id })
      }
    }
  }
</script> 

<style lang="scss">
  .movie {

    &__title {
      text-transform: capitalize;
    }

    &__header {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 4rem;
    }

    &__search {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    &__output {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    &__row {
      display: flex;
      flex-wrap: wrap;
    }

    &__logo {
      margin: 0 auto 3rem;
      width: 20rem;
      height: auto;
    }
  }
</style>
