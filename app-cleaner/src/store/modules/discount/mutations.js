export default {
  'SET_DISCOUNT' (state, payload) {
    state.discount = payload
  },
  'SET_DISCOUNT_STATUS' (state, payload) {
    state.discountStatus = payload.flag ? payload.name : null
    for (let i = 0; i < state.discount.length; i += 1) {
      if (state.discount[i].name !== payload.name) {
        state.discount[i].flag = true
      }
    }
  }
}
