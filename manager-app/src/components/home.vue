<template lang="pug">
  
  // HOME SECTION
  #home.home
    
    // HEADER
    .page-header
      h1 Customers List

    // ALERT SECTION
    app-alert(
      :firstName="userFirtsName",
      :lastName="userLastName",
      :message="userMessage",
      v-if="alertState"
    )

    // INPUT SECTION
    form.home__form
      h3 Search Customers
      .form-group
        input.form-control( type="search", placeholder="Enter Last Name ...", v-model="filterInput" )
    
    // OUTPUT SECTION
    table.table.table-striped.table-hover
      thead
        tr
          th First Name
          th Last Name
          th Email
          th Details
      tbody
        tr( v-for="customer in onFilter(customers, filterInput)" )
          td {{ customer.firstName }}
          td {{ customer.lastName }}
          td {{ customer.email }}
          td
            router-link( tag="a", :to="'/view/' + customer['.key']" )
              i.fa.fa-eye.home__edit( aria-hidden="true" )
</template>

<script>
  import ref from '../router/axios'
  import Alert from '../components/alert'

  export default {
    name: 'home',
    firebase: {
      customers: ref
    },
    data () {
      return {
        userFirtsName: '',
        userLastName: '',
        userMessage: '',
        filterInput: ''
      }
    },
    components: {
      appAlert: Alert
    },
    methods: {
      onChange () {
        if (this.$route.query.name && this.$route.query.surname && this.$route.query.message) {
          this.userFirtsName = this.$route.query.name
          this.userLastName = this.$route.query.surname
          this.userMessage = this.$route.query.message
        }
      },
      onFilter (list, value) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
        return list.filter((customer) => {
          return customer.lastName.indexOf(value) > -1
        })
      }
    },
    computed: {
      alertState () {
        return this.userFirtsName && this.userLastName && this.userMessage
      }
    },
    created () {
      this.onChange()
    }
  }
</script>

<style lang="scss" scoped>
  .home {

    &__form {
      margin-bottom: 3rem;
    }

    &__edit {
      cursor: pointer;

      &:hover {
        color: firebrick
      }
    }
  }
</style>
