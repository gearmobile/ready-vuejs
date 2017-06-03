<template lang="pug">
  .form-inline.text-center
    h3.text-capitalize sign up
    .form-group
      input.form-control( type="email", placeholder="Email", v-model="email" )
      input.form-control( type="password", placeholder="Password", v-model="password" )
      button.btn.btn-primary( type="button", @click="signUp()" ) Sign Up
      br
      br
      router-link( tag="a", to="/signin" ) Already a user? Sign in
      p {{ error.message }}
</template>

<script>
  import { firebaseApp } from '../data/firebase.js'

  export default {
    name: 'signin',
    data () {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signUp () {
        firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            this.error = error
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
