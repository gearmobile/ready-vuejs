<template lang="pug">
  .primo
    md-card
      md-card-header
        .md-title {{ title }}
        .md-subhead {{ subhead }}
      md-card-content
        md-button.md-raised.md-primary( v-on:click.native="onShow" ) {{ buttonShowTitle }}
        md-button.md-raised.md-accent( v-on:click.native="onHide" ) {{ buttonHideTitle }}
      transition( name="slide-fade" )
        md-table( v-if="isShow" )
          md-table-header
            md-table-row
              md-table-head first name
              md-table-head last name 
              md-table-head email address
          md-table-body
            md-table-row( v-for="(item, index) in contacts", :key="index" )
              md-table-cell {{ item.name }}
              md-table-cell {{ item.surname }}
              md-table-cell  {{ item.email  }}
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        title: 'Powered by Vue.js and Material Design',
        subhead: 'coded by gearmobile',
        buttonShowTitle: 'show table',
        buttonHideTitle: 'hide table',
        contacts: [
          { name: 'anna', surname: 'parker', email: 'parker@gmail.com' },
          { name: 'peter', surname: 'smith', email: 'smith@gmail.com' },
          { name: 'ivan', surname: 'ivanov', email: 'ivanov@gmail.com' }
        ],
        isShow: false
      }
    },
    methods: {
      onShow () {
        this.isShow = true
      },
      onHide () {
        this.isShow = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
