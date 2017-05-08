<template lang="pug">
  
  // FORM
  form#edit
    .page-header
      h2.title edit

    // ALERT SECTION
    app-warning( :message="warning", v-if="warning" )

    // FORM CONTROL
    .panel.panel-default
      .panel-body
        .btn-toolbar.clearfix( role="toolbar" )
          .btn-group.pull-left( role="group" )
            button.btn.btn-primary( type="button", @click="goBack()" ) go back
          .btn-group.pull-right( role="group" )
            button.btn.btn-success( type="button", @click="onEdit(customer)" ) edit data
    
    // CUSTOMER INFO
    .panel.panel-default
      .panel-heading
        h2.panel-title customer info
      .panel-body
        .form-group
          label( for="firstName" ) first name
          input.form-control( name="firstName", type="text", placeholder="First Name", v-model.trim="customer.firstName", required )
        .form-group
          label( for="lastName" ) last name
          input.form-control( name="lastName", type="text", placeholder="Last Name", v-model.trim="customer.lastName", required )
      
    // CUSTOMER CONTACT
    .panel.panel-default
      .panel-heading
        h2.panel-title customer contact
      .panel-body
        .form-group
          label( for="email" ) email
          input.form-control( name="email", type="email", placeholder="Email", v-model.trim="customer.email", required )
        .form-group
          label( for="phone" ) phone
          input.form-control( name="phone", type="phone", placeholder="Phone", v-model.trim="customer.phone" )

    // CUSTOMER LOCATION
    .panel.panel-default
      .panel-heading
        h2.panel-title customer location
      .panel-body
        .form-group
          label( for="address" ) address
          input.form-control( name="address", type="text", placeholder="Address", v-model.trim="customer.address" )
        .form-group
          label( for="city" ) city
          input.form-control( name="city", type="text", placeholder="City", v-model.trim="customer.city" )
        .form-group
          label( for="state" ) state
          input.form-control( name="state", type="text", placeholder="State", v-model.trim="customer.state" )

</template>

<script>
  import ref from '../router/axios'
  import Warning from '../components/warning'

  export default {
    name: 'edit',
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
        warning: ''
      }
    },
    methods: {
      onEdit (customer) {
        if (!this.customer.firstName || !this.customer.lastName || !this.customer.email) {
          this.warning = 'Please fill all fields!'
        } else {
          ref.child(this.key).set(customer)
          this.$router.push({ path: '/view/' + this.key, query: { label: 'Customer ' + this.customer.firstName + ' ' + this.customer.lastName + ' updated' } })
          this.warning = ''
        }
      },
      goBack () {
        this.$router.push({ path: '/view/' + this.key })
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
      }
    },
    created () {
      this.findCustomer(this.key)
    }
  }
</script>

<style lang="scss" scoped>
  label, .title, .panel-title, .btn {
    text-transform: capitalize;
  }
</style>
