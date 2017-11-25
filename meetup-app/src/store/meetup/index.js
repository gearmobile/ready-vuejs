import * as firebase from 'firebase'

const state = {
  meetups: []
}

const mutations = {
  'INIT_MEETUPS' (state, payload) {
    state.meetups = payload
  },
  'CREATE_NEW_MEETUP' (state, payload) {
    state.meetups.push(payload)
  },
  'UPDATE_MEETUP' (state, payload) {
    const meetup = state.meetups.find(el => el.id === payload.id)
    if (payload.title) {
      meetup.title = payload.title
    }
    if (payload.description) {
      meetup.description = payload.description
    }
    if (payload.location) {
      meetup.location = payload.location
    }
    if (payload.date) {
      meetup.date = payload.date
    }
    if (payload.time) {
      meetup.time = payload.time
    }
  }
}

const actions = {
  registerUserMeetup ({ commit, getters }, payload) {
    commit('SET_LOADING', true)
    if (getters.getUserMeetups.findIndex(el => el === payload) < 0) {
      firebase.database().ref('/users/' + getters.getExistingUser.id).child('/registrations/').push(payload)
      .then(data => {
        commit('SET_LOADING', false)
        commit('REGISTER_USER_FOR_MEETUP', { meetupID: payload, meetupKEY: data.key })
      })
      .catch(error => {
        console.log(error)
        commit('SET_LOADING', false)
      })
    }
  },
  unregisterUserMeetup ({ commit, getters }, payload) {
    commit('SET_LOADING', true)
    const userCurrent = getters.getExistingUser
    if (!userCurrent.meetupKEYS) {
      return
    }
    const userCurrentMeetupKEY = userCurrent.meetupKEYS[payload]
    firebase.database().ref('/users/' + userCurrent.id + '/registrations/').child(userCurrentMeetupKEY)
      .remove()
      .then(() => {
        commit('SET_LOADING', false)
        commit('UNREGISTER_USER_FOR_MEETUP', payload)
      })
      .catch(error => {
        commit('SET_LOADING', false)
        console.log(error)
      })
  },
  loadMeetupsFromFirebase ({ commit }) {
    commit('SET_LOADING', true)
    firebase.database().ref('meetups').once('value')
      .then(response => {
        const meetups = []
        const obj = response.val()
        for (let key in obj) {
          meetups.push({
            id: key,
            creator: obj[key].creator,
            title: obj[key].title,
            location: obj[key].location,
            description: obj[key].description,
            date: obj[key].date,
            time: obj[key].time,
            src: obj[key].src
          })
        }
        commit('INIT_MEETUPS', meetups)
        commit('SET_LOADING', false)
      })
      .catch(error => {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error)
      })
  },
  createNewMeetup ({ commit, getters }, payload) {
    const newMeetup = {
      title: payload.title,
      image: payload.image,
      location: payload.location,
      description: payload.description,
      creator: getters.getExistingUser.id,
      date: payload.date,
      time: payload.time
    }
    let key = null
    let src = null
    firebase.database().ref('meetups').push(newMeetup)
      .then((response) => {
        key = response.key
        return key
      })
      .then((key) => {
        const fileName = payload.image.name
        const ext = fileName.slice(fileName.lastIndexOf('.'))
        return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
      })
      .then((imageInfo) => {
        src = imageInfo.metadata.downloadURLs[0]
        return firebase.database().ref('meetups').child(key).update({ src: src })
      })
      .then(() => {
        commit('CREATE_NEW_MEETUP', {
          ...newMeetup,
          src: src,
          id: key
        })
      })
      .catch(error => {
        console.log(error)
      })
  },
  updateMeetup ({ commit }, payload) {
    commit('SET_LOADING', true)
    const object = {}
    if (payload.title) {
      object.title = payload.title
    }
    if (payload.description) {
      object.description = payload.description
    }
    if (payload.location) {
      object.location = payload.location
    }
    if (payload.date) {
      object.date = payload.date
    }
    if (payload.time) {
      object.time = payload.time
    }
    firebase.database().ref('meetups').child(payload.id).update(object)
      .then(() => {
        commit('SET_LOADING', false)
        commit('UPDATE_MEETUP', payload)
      })
      .catch(() => {
        commit('SET_LOADING', false)
      })
  }
}

const getters = {
  getMeetupsShort (state, getters) {
    return getters.getMeetupsSorted.slice(0, 3)
  },
  getMeetupsSorted (state) {
    return state.meetups.sort((a, b) => a.date < b.date)
  },
  getMeetupFeatured (state) {
    return (meetupID) => {
      return state.meetups.find(el => el.id === meetupID)
    }
  },
  getRegisteredMeetups (state, getters) {
    const meetupIDs = getters.getUserMeetups
    const meetups = state.meetups
    let result = []
    for (const ID in meetupIDs) {
      for (const meetup in meetups) {
        if (meetupIDs[ID] === meetups[meetup].id) {
          result.push(meetups[meetup])
        }
      }
    }
    return result
  }
}

const store = {
  state,
  mutations,
  actions,
  getters
}

export default store
