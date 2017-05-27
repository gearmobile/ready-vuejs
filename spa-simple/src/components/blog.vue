<template lang="pug">
  section.blog
    article.blog__post( v-for="(post, index) in posts", :key="index" )
      figure.image
        img.blog__image( :src="post.image", alt="post.title" )
      .blog__media
        h3.blog__title {{ post.title }}
        router-link.blog__link( tag="a", :to="{ name: 'Post', params: { id: index } }" ) read more
</template>

<script>
  import posts from '../data/config.js'

  export default {
    name: 'blog',
    firebase: {
      posts
    }
  }
</script>

<style lang="scss" scoped>
  .blog {

    &__image {
      background-clip: content-box
    }

    &__post {
      height: calc( 100vh / 2);
      position: relative;
    }

    &__media {
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
    }

    &__title {
      font-size: 2rem;
      margin: 0 0 1.4rem;
      color: rgba( black, .8 );
    }

    &__link {
      border: .1rem solid rgba( red, .4 );
      border-radius: 4px;
      color: rgba( red, .4 );
      display: inline-block;
      padding: .6rem 3rem .8rem;
      text-decoration: none;

      &:hover {
        background-color: rgba( 255, 255, 255, .6 );
        color: rgba( 0, 0, 0, .6 );
        border-color: rgba( 0,0,0, .2 )
      }

    }
  }
</style>
