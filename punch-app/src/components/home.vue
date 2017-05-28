<template lang="pug">

  // PUNCH
  .punch
    
    // PUNCH HEADER
    header.punch__header( :class="{ 'game-over': gameOver }" )
    
    // PUNCH MAIN
    main.punch__main
      .punch__progress
        .punch__inner( :style="{ width: health + '%' }", :class="{ 'punch-one-third': oneThird, 'punch-two-third': twoThird, 'punch-three-third': threeThird }" )
        .punch__text( :class="{ 'first-half': oneThird, 'second-half': twoThird }" ) health bag: {{ health }}%
    
    // PUNCH FOOTER
    footer.punch__footer
      .punch__control
        button.btn.btn-primary.btn-lg.punch__button( type="button", @click="onPunch()", v-if="!finished" ) punch bag!
        button.btn.btn-danger.btn-lg.punch__button( type="button", @click="onReset()", v-if="finished" ) reset game?

</template>

<script>
  const DAMAGE_LEVEL = 10

  export default {
    name: 'home',
    data () {
      return {
        health: 100,
        finished: false
      }
    },
    methods: {
      randomPunch (value) {
        return Math.floor(Math.random() * value) + 1
      },
      onPunch  () {
        const result = this.health - this.randomPunch(DAMAGE_LEVEL)
        if (result <= 0) {
          this.health = 0
          this.finished = true
        } else {
          this.health = result
        }
      },
      onReset () {
        this.health = 100
        this.finished = false
      }
    },
    computed: {
      gameOver () {
        return this.health === 0
      },
      oneThird () {
        return this.health >= (100 / 3) * 2
      },
      twoThird () {
        return this.health <= (100 / 3) * 2
      },
      threeThird () {
        return this.health <= (100 / 3) * 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/punch-styles.scss'
</style>
