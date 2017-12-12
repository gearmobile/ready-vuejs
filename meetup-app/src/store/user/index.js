import * as firebase from 'firebase'

const state = {
  users: {}
}

const mutations = {
  'CREATE_NEW_USER' (state, payload) {
    const newUser = {
      id: payload.uid,
      meetupKEYS: {},
      meetups: []
    }
    state.users = newUser
  },
  'SET_USER' (state, payload) {
    state.users = payload
  },
  'DELETE_USER' (state) {
    state.users = {}
  },
  'REGISTER_USER_FOR_MEETUP' (state, payload) {
    if (state.users.meetups.findIndex(el => el === payload) < 0) {
      state.users.meetups.push(payload.meetupID)
      state.users.meetupKEYS[payload.meetupID] = payload.meetupKEY
    }
  },
  'UNREGISTER_USER_FOR_MEETUP' (state, payload) {
    const meetups = state.users.meetups
    meetups.splice(meetups.findIndex(el => el === payload), 1)
    Reflect.deleteProperty(state.users.meetupKEYS, payload)
  }
}

const actions = {
  createNewUser ({ commit }, payload) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERROR')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        commit('SET_LOADING', false)
        commit('CREATE_NEW_USER', response)
      })
      .catch(error => {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error)
      })
  },
  loginExistingUser ({ commit }, payload) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERROR')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        commit('SET_LOADING', false)
        commit('CREATE_NEW_USER', response)
      })
      .catch(error => {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error)
      })
  },
  autoLoginExistingUser ({ commit }, payload) {
    commit('SET_USER', {
      id: payload.uid,
      meetupKEYS: {},
      meetups: []
    })
  },
  fetchUserData ({ commit, getters }) {
    commit('SET_LOADING', true)
    firebase.database().ref('/users/' + getters.getExistingUser.id + '/registrations/')
      .once('value')
      .then(data => {
        commit('SET_LOADING', false)
        const meetupsFetched = data.val()
        const meetupsKEYs = {}
        const meetupsIDs = []
        for (let key in meetupsFetched) {
          meetupsIDs.push(meetupsFetched[key])
          meetupsKEYs[meetupsFetched[key]] = key
        }
        const userUpdated = {
          id: getters.getExistingUser.id,
          meetups: meetupsIDs,
          meetupKEYS: meetupsKEYs
        }
        commit('SET_USER', userUpdated)
      })
      .catch(error => {
        console.log(error)
        commit('SET_LOADING', false)
      })
  },
  onLogoutUser ({ commit }) {
    firebase.auth().signOut()
      .then(() => {
        commit('DELETE_USER')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
}

const getters = {
  getExistingUser (state) {
    return state.users
  },
  userIsAuthorized (state) {
    return Object.keys(state.users).length !== 0
  },
  getUserMeetups (state) {
    return state.users.meetups
  }
}

const store = {
  state,
  mutations,
  actions,
  getters
}

export default store
