<template lang="pug">
  #about.about.text-center
    .page-header

      // LOGO SECTION
      figure.about__figure
        img.about__image.img-responsive( src="../assets/logo.png", alt="Manager App" )

      // HEADER SECTION
      h2 About
      p Manager App - CRUD application created by Vue.js v2

      // DESCRIPTION SECTION
      h3 The technology used
      ul.text-center.list-unstyled
        li Vue.js v2
        li VueRouter
        li Axios
        li Firebase + VueFire
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss" scoped>
  .about {
    &__image {
      display: block;
      margin: 4rem auto;
    }
  }
</style>
