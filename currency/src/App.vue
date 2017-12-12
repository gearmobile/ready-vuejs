<template lang="pug">
  v-app( light )
    v-container( grid-list-md )
      v-layout( row, wrap )
        v-flex.mb-4( xs12 )
          component-navigation
        v-flex( xs12 )
          router-view
</template>

<script>
  import Toolbar from '@/partials/NavigationComponent.vue'
  export default {
    components: {
      ComponentNavigation: Toolbar
    }
  }
</script>
