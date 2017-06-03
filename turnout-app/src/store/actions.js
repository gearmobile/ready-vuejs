import * as types from './mutation-types'

export const signIn = ({ commit }, payload) => {
  commit(types.SIGN_IN, payload)
}

export const signOut = ({ commit }) => {
  commit(types.SIGN_OUT)
}

export const setEvents = ({ commit }, eventsPayload) => {
  commit(types.SET_EVENT, eventsPayload)
}
