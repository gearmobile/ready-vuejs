export default {
  'SET_PROMOCODE' (state, payload) {
    state.promocode = payload
  },
  'SET_PROMO_VALUE' (state, payload) {
    if (parseInt(payload) === state.promocode.check) {
      state.promocode.status = true
      state.promocode.error = false
    } else {
      state.promocode.error = true
    }
  }
}
