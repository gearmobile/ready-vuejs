<template lang="pug">

  v-container

    // ALERT SECTION
    v-layout.my-4( row, v-if="!showAlert", transition="slide-y-transition" )
      v-flex( xs12, md6, offset-md3 )
        app-alert( @dismissed="onDismiss()", :alertMessage="errorExisting.message" )

    // MAIN SECTION
    v-layout.my-4( row )
      v-flex( xs12, md6, offset-md3 )
        h4
          | SignUp New User
    
    v-layout( row )
      v-flex( xs12, md6, offset-md3 )
        form( @submit.prevent="onSignUp()" )
          v-layout.mb-5( row )
            v-flex( xs12 )
              v-text-field( name="email", id="email", label="Input Email", type="email", v-model="user.email", hide-details, required )
          v-layout.mb-5( row )
            v-flex( xs12 )
              v-text-field( name="password", id="password", label="Input Password", type="password", v-model="user.password", hide-details, required )
          v-layout.mb-5( row )
            v-flex( xs12 )
              v-text-field( name="repeatedPassword", id="repeatedPassword", label="Repeat Password", type="password", v-model="user.repeatedPassword", :rules="[comparePasswords]", hide-details, required )
          v-layout( row )
            v-flex( xs12 )
              v-btn.primary( type="submit", :disabled="loading", :loading="loading", block )
                | signup
                span.custom-loader( slot="loader" )
                  v-icon( light )
                    | cached

</template>

<script>
  
  import { mapActions, mapGetters } from 'vuex'
  import componentAlert from '../../components/Shared/Alert.vue'
  import isEmpty from 'lodash.isempty'
  import isUndefined from 'lodash.isundefined'
  
  export default {
    name: 'SignUp',
    data () {
      return {
        user: {
          email: '',
          password: '',
          repeatedPassword: ''
        }
      }
    },
    methods: {
      ...mapActions({
        signUp: 'createNewUser',
        removeError: 'resetError'
      }),
      onSignUp () {
        const newUser = {
          email: this.user.email,
          password: this.user.password
        }
        this.signUp(newUser)
      },
      onDismiss () {
        this.removeError()
      }
    },
    computed: {
      ...mapGetters({
        userExisting: 'getExistingUser',
        errorExisting: 'getError',
        loading: 'getLoading'
      }),
      comparePasswords () {
        return this.user.password !== this.user.repeatedPassword ? 'Password do not match' : ''
      },
      showAlert () {
        return isEmpty(this.errorExisting)
      }
    },
    watch: {
      userExisting (value) {
        if (!isEmpty(value) && !isUndefined(value)) {
          this.$router.push({ path: '/' })
        }
      }
    },
    components: {
      appAlert: componentAlert
    }
  }
</script>

<style lang="scss" scoped>
  @import url('../../styles/spinned-button.scss');
</style>
