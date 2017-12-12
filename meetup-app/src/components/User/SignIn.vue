<template lang="pug">

  v-container( grid-list-md )

    // ALERT SECTION
    v-layout.my-4( row, v-if="!showAlert", transition="slide-y-transition" )
      v-flex( xs12, md6, offset-md3 )
        app-alert( @dismissed="onDismiss()", :alertMessage="errorExisting.message" )

    // MAIN SECTION
    v-layout.my-4( row )
      v-flex( xs12, md6, offset-md3 )
        h4
          | SignIn User
    
    v-layout( row )
      v-flex( xs12, md6, offset-md3 )
        form( @submit.prevent="onSignIn()" )
    
          v-layout.mb-5( row )
            v-flex( xs12 )
              v-text-field( name="email", id="email", label="Input Email", type="email", v-model="user.email", hide-details, required )
    
          v-layout.mb-5( row )
            v-flex( xs12 )
              v-text-field( name="password", id="password", label="Input Password", type="password", v-model="user.password", hide-details, required )   
    
          v-layout( row )
            v-flex( xs12 )
              v-btn.primary( type="submit", :disabled="loading", :loading="loading", block )
                | signin
                span.custom-loader( slot="loader" )
                  v-icon( light )
                    | cached

</template>

<script>
  
  import { mapActions, mapGetters } from 'vuex'
  import isEmpty from 'lodash.isempty'
  import isUndefined from 'lodash.isundefined'
  import componentAlert from '../Shared/Alert.vue'
  
  export default {
    name: 'SignIn',
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters({
        existingUser: 'getExistingUser',
        errorExisting: 'getError',
        loading: 'getLoading'
      }),
      showAlert () {
        return isEmpty(this.errorExisting)
      }
    },
    methods: {
      ...mapActions({
        signInExistingUser: 'loginExistingUser',
        removeError: 'resetError'
      }),
      onSignIn () {
        const user = {
          email: this.user.email,
          password: this.user.password
        }
        this.signInExistingUser(user)
      },
      onDismiss () {
        this.removeError()
      }
    },
    watch: {
      existingUser (value) {
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