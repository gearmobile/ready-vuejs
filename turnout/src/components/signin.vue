<template lang="pug">
  .form-inline.text-center
    h3.text-capitalize sign in
    .form-group
      input.form-control( type="email", placeholder="Email", v-model="email" )
      input.form-control( type="password", placeholder="Password", v-model="password" )
      button.btn.btn-primary( type="button", @click="signIn()" ) Sign In
      br
      br
      router-link( tag="a", to="/signup" ) Not a user? Sign up
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
      signIn () {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
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
