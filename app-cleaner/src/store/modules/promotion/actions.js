import data from '../../../data/data.json'

export default {
  initData ({ commit }) {
    commit('SET_PROMOTION', data.promotion)
  }
}
