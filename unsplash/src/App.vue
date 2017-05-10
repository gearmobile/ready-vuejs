<template lang="pug">
  
  // UNSPLASH
  #app.unsplash

    // HEADER SECTION
    h1.title.is-1.has-text-centered unsplash
    
    // PAGINATION SECTION
    .columns.unsplash__pagination
      .column.auto
        app-pagination( :total="totalPhotos", :currPage="currentPage", @pageChanged="getPhotos" )
    
    // OUTPUT SECTION
    .columns.is-multiline.is-tablet
      .column.is-one-third-tablet.is-one-quarter-desktop( v-for="(photo, index) in photos", :key="index" )
        .card
          .card-image
            figure.image
              img( :src="photo.urls.small", alt="Image" )
          .card-content
            .media
              .media-left
                figure.image
                  img.unsplash__photo( :src="photo.user.profile_image.medium", alt="photo.user.name" )
              .media-content
                p.title.is-4.unsplash__title {{ photo.user.name }}
                a.subtitle.is-6( :href="photo.user.portfolio_url", target="_blank" ) {{ photo.user.username }}
</template>

<script>
  import axios from 'axios'
  import Pagination from './components/pagination.vue'
  
  const url = 'https://api.unsplash.com/photos'

  export default {
    name: 'app',
    data () {
      return {
        photos: [],
        totalPhotos: null,
        currentPage: 1,
        perPage: 9
      }
    },
    components: {
      appPagination: Pagination
    },
    methods: {
      getPhotos (value) {
        const config = {
          params: {
            client_id: '6f4d3134dae83411f959c6372d6b98f701f812491bee1eff182c067f0811b392',
            per_page: this.perPage,
            page: value
          }
        }
        axios.get(url, config)
          .then(response => {
            this.photos = response.data
            this.totalPhotos = parseInt(response.headers['x-total'])
            this.currentPage = config.params.page
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.getPhotos(this.currentPage)
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    padding-right: 2rem;
    padding-left: 2rem;

    & .unsplash {

      &__title {
        margin-bottom: 0;
      }

      &__photo {
        border-radius: 50%;
      }
    }
  }
</style>
