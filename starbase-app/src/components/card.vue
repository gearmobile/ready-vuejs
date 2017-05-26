<template lang="pug">
  .card.card-outline-info( @mouseover="onOver()", @mouseout="onOut()" )
    .card-block
      h4.card-title {{ character.name }}
      p.card-text #[strong Height:] {{ character.height }}cm
      p.card-text #[strong Gender:] {{ character.gender }}
      p.card-text #[strong Hair Color:] {{ character.hair_color }}
      p.card-text #[strong Eye Color:] {{ character.eye_color }}
    .card-overlay.rounded( @click="onClick()", :class="{ 'card-overlay--active': isActive }" )
      i.fa.fa-refresh.fa-4x.card-icon( aria-hidden="true" )
</template>

<script>
  export default {
    name: 'card',
    data () {
      return {
        isActive: false
      }
    },
    props: {
      character: {
        type: Object,
        default: null
      }
    },
    methods: {
      onOver () {
        this.isActive = true
      },
      onOut () {
        this.isActive = false
      },
      onClick () {
        this.$emit('onSelect', this.character)
      }
    }
  }
</script>

<style scoped>
  .card-block .card-text {
    margin-bottom: .2rem;
  }
  .card {
    position: relative;
  }
  .card-overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba( 0,0,0, .7 );
    z-index: 2;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  .card-overlay--active {
    display: block;
  }
  .card-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba( 255,255,255, .5 )
  }
</style>
