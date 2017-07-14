<template lang="pug">
  .modal.fade( :class='{ in: state }', :style='modalStyle', tabindex='-1', role='dialog' )
    .modal-dialog( role='document' )
      .modal-content
        .modal-header
          button.close( @click='toggle', type='button', aria-label='Close' )
            span(aria-hidden='true') ×
          h4.modal-title Modal title
        .modal-body
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur culpa dolor, dolorum ea earum error et eveniet id illo illum impedit inventore, labore maxime molestias natus nemo neque non nulla numquam perspiciatis quaerat quasi quia reiciendis repudiandae vel vitae.
        .modal-footer
          button.btn.btn-default( @click='toggle', type='button' ) Close
          button.btn.btn-primary( @click='toggle', type='button' ) Save changes

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'modal',
    computed: {
      ...mapGetters({
        state: 'getModal'
      }),
      modalStyle () {
        return this.state ? { display: 'block' } : {}
      }
    },
    methods: {
      ...mapActions({
        toggle: 'modalToggle'
      })
    }
  }
</script>


<style lang="scss">
  //
</style>

