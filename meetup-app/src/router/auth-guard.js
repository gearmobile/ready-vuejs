import store from '../store/'

export function signIn (to, from, next) {
  if (store.getters.userIsAuthorized) {
    next()
  } else {
    next('/signin')
  }
}

export function signUp (to, from, next) {
  if (store.getters.userIsAuthorized) {
    next()
  } else {
    next('/signup')
  }
}
