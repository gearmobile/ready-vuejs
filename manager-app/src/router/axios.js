import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCSZRBT4BTqm8RrTT8BeFaxwbbfoBbeTHY',
  authDomain: 'manager-c0436.firebaseapp.com',
  databaseURL: 'https://manager-c0436.firebaseio.com',
  projectId: 'manager-c0436',
  storageBucket: 'manager-c0436.appspot.com',
  messagingSenderId: '653041178785'
}

const ref = firebase.initializeApp(config).database().ref('customers')

export default ref
