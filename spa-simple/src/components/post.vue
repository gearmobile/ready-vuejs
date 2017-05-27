<template lang="pug">
  article.post( v-if="post" )
    h3.post__title {{ post.title }}
    img.post__image( :src="post.image", alt="post.title" )
    p.post__body {{ post.body }}
    .post__control
      router-link.post__link( tag="a", to="/blog" ) back to blog
</template>

<script>
  import posts from '../data/config.js'

  export default {
    name: 'post',
    firebase: {
      posts
    },
    data () {
      return {
        post: null
      }
    },
    created () {
      this.post = this.posts[this.$route.params.id]
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    padding-top: 8rem;
    padding-bottom: 2rem;

    &__image {
      width: 100%;
      object-fit: cover;
      height: 500px;
      object-position: top center;
      margin-bottom: 40px;
    }

    &__title {
      font-size: 29px;
      line-height: 30px;
      color: #1f1f1f;
      margin: 0 auto 40px;
      max-width: 640px;
    }

    &__body {
      font-family: "PT Serif", serif;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.6);
      line-height: 28px;
      margin: 0 auto 50px;
      max-width: 640px;
    }

    &__control {
      text-align: center;
    }

    &__link {
      padding: .6rem 3rem .8rem;
      border: 1px solid rgba( blue, .5 );
      border-radius: 4px;
      color: rgba( blue, .5 );
      display: inline-block;
      z-index: 2;

      &:hover {
        background-color: rgba( blue, .1);
      }
    }
  }
</style>
