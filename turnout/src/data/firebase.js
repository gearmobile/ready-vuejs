import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDO-O_qrwur-WY0BNWv4b0I2znkeS_T9U4',
  authDomain: 'turnout-app.firebaseapp.com',
  databaseURL: 'https://turnout-app.firebaseio.com',
  projectId: 'turnout-app',
  storageBucket: 'turnout-app.appspot.com',
  messagingSenderId: '813336604617'
}

export const firebaseApp = firebase.initializeApp(config)
export const eventRef = firebase.database().ref().child('events')
