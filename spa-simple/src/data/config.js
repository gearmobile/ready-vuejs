import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDgwqFAHeir7gLYGGJjx6sZRq1gy2JPH7g',
  authDomain: 'spa-simple.firebaseapp.com',
  databaseURL: 'https://spa-simple.firebaseio.com',
  projectId: 'spa-simple',
  storageBucket: 'spa-simple.appspot.com',
  messagingSenderId: '964962980039'
}

const posts = firebase.initializeApp(config).database().ref('posts')

export default posts
