<template lang="pug">
  // FORM
  form#add( @submit.prevent="onSend" )
    
    // HEADER
    .page-header
      h2 Add Customer
    
    // CUSTOMER INFO
    .panel.panel-default
      .panel-heading
        h2.panel-title Customer Info
      .panel-body
        .form-group
          label( for="firstName" ) First Name
          input.form-control( name="firstName", type="text", placeholder="First Name", v-model.trim="customer.firstName", required )
        .form-group
          label( for="lastName" ) Last Name
          input.form-control( name="lastName", type="text", placeholder="Last Name", v-model.trim="customer.lastName", required )
    
    // CUSTOMER CONTACT
    .panel.panel-default
      .panel-heading
        h2.panel-title Customer Contact
      .panel-body
        .form-group
          label( for="email" ) Email
          input.form-control( name="email", type="email", placeholder="Email", v-model.trim="customer.email", required )
        .form-group
          label( for="phone" ) Phone
          input.form-control( name="phone", type="phone", placeholder="Phone", v-model.trim="customer.phone" )

    // CUSTOMER LOCATION
    .panel.panel-default
      .panel-heading
        h2.panel-title Customer Location
      .panel-body
        .form-group
          label( for="address" ) Address
          input.form-control( name="address", type="text", placeholder="Address", v-model.trim="customer.address" )
        .form-group
          label( for="city" ) City
          input.form-control( name="city", type="text", placeholder="City", v-model.trim="customer.city" )
        .form-group
          label( for="state" ) State
          input.form-control( name="state", type="text", placeholder="State", v-model.trim="customer.state" )
    
    // SUBMIT FORM
    button.btn.btn-default( type="submit" ) Add Data
</template>

<script>
  import ref from '../router/axios'

  export default {
    name: 'add',
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
        message: 'added'
      }
    },
    methods: {
      onSend () {
        if (this.customer.firstName !== null || this.customer.lastName !== null || this.customer.email !== null) {
          ref.push(this.customer)
          this.$router.push({ path: '/', query: { name: this.customer.firstName, surname: this.customer.lastName, message: this.message } })
          for (let key in this.customer) {
            this.customer[key] = null
          }
        } else {
          alert('Enter all fields')
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
