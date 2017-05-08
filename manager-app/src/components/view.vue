<template lang="pug">
  
  // VIEW
  #view
    h1.page-header {{ customer.firstName }} {{ customer.lastName }}

    // WARNING SECTION
    app-warning( :message="notification" v-if="notification" )

    // VIEW CONTROL
    .panel.panel-default
      .panel-body
        .btn-toolbar.clearfix( role="toolbar" )
          .btn-group.pull-left( role="group" )
            button.btn.btn-default( type="button", @click="goHome()" ) go home
          .btn-group.pull-right( role="group" )
            button.btn.btn-success( type="button", @click="onEdit()" ) edit data
            button.btn.btn-danger( type="button", @click="onRemove(customer)" ) delete data
    
    // VIEW GROUP
    ul.list-group
      li.list-group-item
        i.fa.fa-envelope.fa-lg( aria-hidden="true" )
        | {{ customer.email }}
      li.list-group-item
        i.fa.fa-phone.fa-lg( aria-hidden="true" )
        | {{ customer.phone }}
    
    // VIEW GROUP
    ul.list-group
      li.list-group-item
        i.fa.fa-address-book-o.fa-lg( aria-hidden="true" )
        | {{ customer.address }}
      li.list-group-item
        i.fa.fa-building.fa-lg( aria-hidden="true" )
        | {{ customer.city }}
      li.list-group-item
        i.fa.fa-globe.fa-lg( aria-hidden="true" )
        | {{ customer.state }}

</template>

<script>
  import ref from '../router/axios'
  import Warning from '../components/warning'

  export default {
    name: 'view',
    firebase: {
      customers: ref
    },
    components: {
      appWarning: Warning
    },
    data () {
      return {
        customer: {
          firstName: null,
          lastName: null,
          email: null,
          phone: null,
          address: null,
          city: null,
          state: null
        },
        key: this.$route.params.key,
        notification: ''
      }
    },
    methods: {
      onRemove (customer) {
        if (!this.customer) {
          return false
        } else {
          ref.child(this.key).remove()
          this.$router.push({ path: '/', query: { name: this.customer.firstName, surname: this.customer.lastName, message: 'deleted' } })
        }
      },
      onEdit () {
        this.$router.push({ path: '/view/edit/' + this.key })
      },
      goHome () {
        this.$router.push({ path: '/' })
      },
      findCustomer (value) {
        for (let i = 0; i < this.customers.length; i += 1) {
          if (this.customers[i]['.key'] === value) {
            this.customer.firstName = this.customers[i].firstName
            this.customer.lastName = this.customers[i].lastName
            this.customer.email = this.customers[i].email
            this.customer.phone = this.customers[i].phone
            this.customer.address = this.customers[i].address
            this.customer.city = this.customers[i].city
            this.customer.state = this.customers[i].state
          }
        }
      },
      onChanged () {
        if (this.$route.query.label) {
          this.notification = this.$route.query.label
        }
      }
    },
    created () {
      this.findCustomer(this.key)
      this.onChanged()
    }
  }
</script>

<style lang="scss" scoped>
  label, .title, .panel-title, .btn {
    text-transform: capitalize;
  }
  .fa {
    margin-right: 2rem;
    color: teal;
  }
</style>
