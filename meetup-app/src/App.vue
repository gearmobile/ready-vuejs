<template lang="pug">
  v-app( light )
    
    // DRAWER
    v-navigation-drawer( v-model="sideNav", temporary )
      v-list
        
        v-list-tile( v-for="(item, index) in menuItems", :key="index", :to="item.path" )
          v-list-tile-action
            v-icon
              | {{ item.icon }}
          v-list-tile-content( style="text-transform: capitalize;" )
            | {{ item.title }}
        
        // LOGOUT LIST ITEM
        v-list-tile.logout( v-if="userAuthorized", @click.native="onLogoutExistingUser()" )
          v-list-tile-action
            v-icon.logout__icon
              | exit_to_app
          v-list-tile-content.logout__title
            | log out
    
    // TOOLBAR
    v-toolbar( dark, color="primary" )
      v-toolbar-side-icon.hidden-sm-and-up( @click.stop="onShowSideNav()" )
      v-toolbar-title
        router-link( tag="span", to="/", style="cursor: pointer" )
          | Meetup Organizer
      v-spacer
      v-toolbar-items.hidden-xs-only
        v-btn( v-for="(item, index) in menuItems", :key="index", :to="item.path", flat )
          v-icon( left )
            | {{ item.icon }}
          | {{ item.title }}
        // LOGOUT BUTTON
        v-btn( flat, v-if="userAuthorized", @click.native="onLogoutExistingUser()" )
          v-icon( left )
            | exit_to_app
          | logout
    
    // MAIN SECTION
    section.main
      router-view
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    methods: {
      onShowSideNav () {
        this.sideNav = !this.sideNav
      },
      onLogoutExistingUser () {
        this.$store.dispatch('onLogoutUser')
        this.$router.push({ name: 'Home' })
      }
    },
    computed: {
      userAuthorized () {
        return this.$store.getters.userIsAuthorized
      },
      menuItems () {
        let items = []
        if (!this.userAuthorized) {
          items = [
            { icon: 'face', title: 'sign up', path: '/signup' },
            { icon: 'lock_open', title: 'sign in', path: '/signin' }
          ]
        } else {
          items = [
            { icon: 'supervisor_account', title: 'view meetups', path: '/meetuplist' },
            { icon: 'room', title: 'organize meetup', path: '/meetupnew' },
            { icon: 'person', title: 'profile', path: '/profile' }
          ]
        }
        return items
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'

  .logout
    background-color: #4db6ac
    transition: background-color .2s

    &:hover
      background-color: #009688

    &__icon
      color: white !important

    &__title
      cursor: pointer
      color: white
      text-transform: capitalize
      font-weight 700

</style>
