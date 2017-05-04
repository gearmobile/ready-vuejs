<template lang='pug'>
  .col-md-10.col-md-offset-1
    .page-header
      h1 Vue.js &amp; Firebase App
    
    // INPUT
    .panel.panel-default
      .panel-heading
        h3 Add New Book
      .panel-body
        form.form-inline( @submit.prevent="sendData" )
          .form-group
            label( for="author" ) Author
            input.form-control( id="author", type="text", placeholder="Author", v-model="book.author" )
          .form-group
            label( for="title" ) Title
            input.form-control( id="title", type="text", placeholder="Title", v-model="book.title" )
          .form-group
            label( for="email" ) Email
            input.form-control( email="email", type="email", placeholder="Email", v-model="book.email" )
          .form-group
            label( for="link" ) Link
            input.form-control( link="link", type="text", placeholder="Link", v-model="book.link" )
          .form-group.button-field
            button.bnt.btn-default.btn-lg( type="submit" ) Add Book
    
    // OUTPUT
    .panel.panel-default
      .panel-heading
        h3 Books List
      .panel-body
        table.table.table-striped
          thead
            tr
              th Title
              th Author
              th Email
              th Link
              th Delete
          tbody
            tr( v-for="(item, index) in books" :key="index" )
              td {{ item.author }}
              td {{ item.title }}
              td {{ item.email }}
              td: a( :href="item.link" ) {{ item.link }}
              td.remove: i.fa.fa-trash-o( aria-hidden="true", @click="removeBook(item)" )
</template>

<script>
  import ref from '../axios'

  export default {
    name: 'primo',
    firebase: {
      books: ref
    },
    methods: {
      sendData () {
        if (!this.book.author && !this.book.title && !this.book.email && !this.book.link) {
          ref.push(this.book)
          for (let key in this.book) {
            this.book[key] = null
          }
        } else {
          alert('Enter all fields!')
          return false
        }
      },
      removeBook (item) {
        ref.child(item['.key']).remove()
      }
    },
    data () {
      return {
        book: {
          author: null,
          title: null,
          email: null,
          link: null
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .form-group {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    & label {
      margin-right: 10px;
    }
    &.button-field {
      display: block;
      margin: 20px 10px;
      & button {
        float: right;
      }
    }
  }
  .table i {
    cursor: pointer;
  }
  .table .remove {
    text-align: center;
  }
</style>
