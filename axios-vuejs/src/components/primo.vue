<template lang="pug">
  .primo
    .jumbotron
      h1 axios example
      h4 axios is a library not just for vue
    
    // GET SIMPLE REQUEST
    .panel.panel-primary
      .panel-heading get simple request
      .panel-body
        .bnt-group( role="group" )
          button.btn.btn-primary( type="button", @click="onSimpleRequest" ) get request
          button.btn.btn-warning( type="button", @click="onSimpleClear" ) clear request
          component( :is="currSimpleView" )
    
    // GET REQUEST WITH PARAMETERS
    .panel.panel-primary
      .panel-heading get request with parameter
      .panel-body
        .bnt-group( role="group" )
          input.form-control( type="text", placeholder="Enter ID of request here ...", v-model.trim="requestID", required )
          button.btn.btn-primary( type="button", @click="onComplexRequest" ) get request
          button.btn.btn-warning( type="button", @click="onComplexClear" ) clear request
          component( :is="currComplexView" )
    
    // POST REQUEST
    .panel.panel-primary
      .panel-heading post request 
      .panel-body
        form.form-inline
          .form-group
            input.form-control( type="text", placeholder="Enter number more than 200", title="Enter number more than 200", v-model.trim.number="postID", @keyup.enter="onPost" )
          button.btn.btn-primary( type="submit", @click.prevent="onPost" ) send request
        button.btn.btn-warning( type="button", @click="onPostClear" ) clear input
        component( :is="currPostView" )

</template>

<script>
  const url = 'https://jsonplaceholder.typicode.com/todos'

  import OutputSuccess from './outputSuccess.vue'
  import OutputError from './outputError.vue'

  import eventBus from '../main.js'

  export default {
    name: 'primo',
    data () {
      return {
        currSimpleView: '',
        currComplexView: '',
        currPostView: '',
        status: '',
        header: '',
        datas: '',
        message: '',
        requestID: '',
        postID: ''
      }
    },
    components: {
      appOutputSuccess: OutputSuccess,
      appOutputError: OutputError
    },
    computed: {
      statusText () {
        if (this.status === 200) {
          return 'OK'
        } else {
          return ''
        }
      }
    },
    methods: {
      // POST METHODS
      onPost () {
        if (this.postID && this.postID > 200) {
          const newUser = {
            userId: this.postID,
            id: this.postID,
            title: 'title from vuejs',
            completed: false
          }
          this.axios.post(url, newUser)
          .then(response => {
            this.fillSuccessData(response)
            this.currPostView = 'appOutputSuccess'
            this.postID = ''
          })
          .catch(error => {
            this.fillErrorData(error)
            this.currPostView = 'appOutputError'
          })
        } else {
          alert('Enter number more than 200')
        }
      },
      onPostClear () {
        this.postID = ''
        this.currPostView = ''
      },
      // COMPLEX REQUEST METHODS
      onComplexRequest () {
        this.axios.get(url, {
          params: {
            id: this.requestID
          }
        })
          .then(response => {
            this.requestID = ''
            this.fillSuccessData(response)
            this.currComplexView = 'appOutputSuccess'
          })
          .catch(error => {
            this.fillErrorData(error)
            this.currComplexView = 'appOutputError'
          })
      },
      onComplexClear () {
        this.clearData()
        this.currComplexView = ''
        this.requestID = ''
      },
      // SIMPLE REQUEST METHODS
      onSimpleRequest () {
        this.axios.get(url)
          .then(response => {
            this.fillSuccessData(response)
            eventBus.$emit('getSuccess', this.status, this.statusText, this.header, this.datas)
            this.currSimpleView = 'appOutputSuccess'
          })
          .catch(error => {
            this.fillErrorData(error)
            eventBus.$emit('getError', this.message, this.status)
            this.currSimpleView = 'appOutputError'
          })
      },
      onSimpleClear () {
        this.clearData()
        this.currSimpleView = ''
      },
      // HELPER METHODS
      clearData () {
        this.status = ''
        this.statusText = ''
        this.header = ''
        this.datas = ''
      },
      fillSuccessData (value) {
        this.status = value.status
        this.statusText = value.statusText
        this.header = JSON.stringify(value.headers, null, '\t')
        this.datas = JSON.stringify(value.data, null, '\t')
      },
      fillErrorData (value) {
        this.message = value.message
        this.status = value.response.status
      }
    }
  }
</script>

<style lang="scss" scoped>
// 
</style>
