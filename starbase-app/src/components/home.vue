<template lang="pug">
  #home.person
    h1.display-4.text-capitalize.person__title generate your team
    button.btn.btn-primary( type="button", @click="fetchPersons(6)" ) Fetch Persons
    .row
      .card-columns.person__row
        app-card( v-for="(person, index) in persons", :key="index", :character="person", @onSelect="onUpdate($event)" )
</template>

<script>
  import Card from '../components/card.vue'
  import axios from 'axios'
  const baseURL = 'http://swapi.co/api/people/'

  export default {
    name: 'home',
    data () {
      return {
        count: null,
        persons: [],
        currPerson: null,
        newPerson: null
      }
    },
    methods: {
      onUpdate ($event) {
        this.currPerson = $event
        this.fetchPerson()
        this.persons.splice(this.persons.indexOf(this.currPerson), 1, this.newPerson)
      },
      clearArray (array) {
        for (let i = array.length; i > 0; i -= 1) {
          array.pop()
        }
      },
      counter () {
        axios.get(baseURL)
          .then(response => {
            this.count = parseInt(response.data.count)
          })
          .catch(error => {
            console.log(error)
          })
      },
      randomID () {
        return Math.floor(Math.random() * this.count) + 1
      },
      fillArray () {
        axios.get(baseURL + this.randomID())
          .then(response => {
            this.persons.push(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      fetchPersons (quantity) {
        this.clearArray(this.persons)
        for (let i = 0; i < quantity; i += 1) {
          this.fillArray()
        }
      },
      fetchPerson () {
        axios.get(baseURL + this.randomID())
          .then(response => {
            this.newPerson = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    // CREATED HOOK
    created () {
      this.counter()
    },
    components: {
      appCard: Card
    }
  }
</script>

<style scoped>
  button {
    cursor: pointer;
  }
  .person__title {
    margin-bottom: 1rem;
  }
  .person__row {
    padding-top: 2rem;
  }
</style>
