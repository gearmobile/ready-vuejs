<template lang="pug">

  v-container.mb-4( grid-list-md )
    v-layout( row )
      v-flex( xs12, md3, offset-md9 )
        v-switch(
          :label="$t('switcher.label')",
          hide-details,
          color="red darken-3",
          v-model="language"
        )

</template>

<script>
  export default {
    name: 'LanguageSwitcher',
    computed: {
      language: {
        get () { return this.$store.getters.getLanguage },
        set (value) { this.$store.dispatch('setLanguage', value) }
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
