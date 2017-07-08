<template lang="pug">
  .details

    // DETAILS INFO
    .columns.details__info
      .column.is-4
        figure.image
          img( :src="details.Poster", alt="details.Title" )
      .column.is-8
        h2.title.is-2 {{ details.Title }}
        ul.details__list
          li #[strong Released]: {{ details.Released }}
          li #[strong Country]: {{ details.Country }}
          li #[strong Genre]: {{ details.Genre }}
          li #[strong Actors]: {{ details.Actors }}
          li #[strong Director]: {{ details.Director }}
          li #[strong Language]: {{ details.Language }}
          li #[strong Rating]: {{ details.imdbRating }}
          li #[strong Awards]: {{ details.Awards }}
          li #[strong BoxOffice]: {{ details.BoxOffice }}
    
    // DETAILS PLOT
    .columns.details__plot
      .column.auto
        h3.title.is-3.has-text-centered Plot
        p {{ details.Plot }}
        .field.is-grouped.details__control
          .control
            a.button.is-info.details__button( :href="'http://imdb.com/title/' + details.imdbID", target="_blank" ) view imdb
          .control
            router-link.button.is-success.details__button( tag="a", :to="{ path: '/' }" ) back to search
</template>

<script>
  import axios from 'axios'
  const url = 'http://www.omdbapi.com'

  export default {
    name: 'details',
    data () {
      return {
        details: {}
      }
    },
    methods: {
      getDetails () {
        axios.get(url + '?i=' + this.$route.params.id)
          .then(response => {
            this.details = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.getDetails()
    }
  }
</script>

<style lang="scss" scoped>
  .details {
    padding-right: 2rem;
    padding-left: 2rem;

    &__info {
      margin-bottom: 3rem;
    }

    &__list{

      & li {
        margin-bottom: .3rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__control {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
    }

    &__button {
      text-transform: uppercase;
    }
  }
</style>
