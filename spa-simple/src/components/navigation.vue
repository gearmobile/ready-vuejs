<template lang="pug">
  nav.nav.has-shadow
    .nav-left
      a.nav-item
        p.nav-header #[strong SPA Simple]
    .nav-right
      router-link.nav-item( to="/", tag="a", active-class="is-active", exact ) home
      router-link.nav-item( to="/brands", tag="a", active-class="is-active" ) brands
      router-link.nav-item( to="/blog", tag="a", active-class="is-active" ) blog
      router-link.nav-item( to="/contacts", tag="a", active-class="is-active" ) contacts
      router-link.nav-item( to="/projects", tag="a", active-class="is-active" ) projects
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    width: 100%;
  }
  .nav-header {
    font-size: 1.4rem;
    color: teal;
  }
  .nav-item {
    text-transform: capitalize;
  }
</style>
