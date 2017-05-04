import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDSizpfjY6ENXZJyLQ-4-ybLuieq2Zw9tY',
  authDomain: 'books-2a159.firebaseapp.com',
  databaseURL: 'https://books-2a159.firebaseio.com',
  projectId: 'books-2a159',
  storageBucket: 'books-2a159.appspot.com',
  messagingSenderId: '1024914276272'
}
const ref = firebase.initializeApp(config).database().ref('books')

export default ref
