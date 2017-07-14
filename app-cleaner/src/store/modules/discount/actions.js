import data from '../../../data/data.json'

export default {
  initDiscount ({ commit }) {
    commit('SET_DISCOUNT', data.discount)
  },
  setDiscountStatus ({ commit }, payload) {
    commit('SET_DISCOUNT_STATUS', payload)
  }
}
