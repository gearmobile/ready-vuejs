export default {
  getDiscount (state) {
    return state.discount
  },
  getDiscountStatus (state) {
    return state.discountStatus
  },
  showDiscount (state) {
    return !!state.discountStatus
  },
  showCommon (state) {
    return !state.discountStatus
  },
  getDiscountSum (state, rootGetters) {
    let result = 0
    if (state.discountStatus) {
      for (let i = 0; i < state.discount.length; i += 1) {
        if (state.discount[i].name === state.discountStatus) {
          result = rootGetters.getDirtySum * state.discount[i].value / 100
        }
      }
    }
    return result
  }
}
