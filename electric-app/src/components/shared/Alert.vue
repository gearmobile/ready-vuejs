<template lang="pug">

    v-snackbar( v-model="alert.show", :timeout="alert.timeout", :top="alert.top", :color="alert.color" )
      | {{ alert.text }}
      v-btn( flat, color="black", @click.native="onShow()" )
        | закрыть
        
</template>

<script>
  import EventBus from '../../events/eventBus'

  export default {
    name: 'Alert',
    data () {
      return {
        alert: {
          show: false,
          timeout: 2000,
          top: true
        }
      }
    },
    methods: {
      onShow () {
        this.alert.show = false
      }
    },
    mounted () {
      EventBus.$on('eventValueMax', (data) => {
        this.alert.text = data.text
        this.alert.color = data.color
        this.alert.show = true
      })
      EventBus.$on('eventValueMin', (data) => {
        this.alert.text = data.text
        this.alert.color = data.color
        this.alert.show = true
      })
    }
  }
</script>
