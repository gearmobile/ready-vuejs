export default {
  getPromocode (state) {
    return state.promocode
  },
  getPromoStatus (state) {
    return state.promocode.status
  },
  getPromoError (state) {
    return state.promocode.error
  },
  getPromoSum (state, rootGetters) {
    let result = 0
    if (state.promocode.status) {
      result = rootGetters.getDirtySum * state.promocode.percent / 100
    }
    return result
  }
}
