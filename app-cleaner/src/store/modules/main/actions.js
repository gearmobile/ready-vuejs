import data from '../../../data/data.json'

export default {
  initData ({ commit }) {
    commit('SET_DATA', data.data)
    commit('SET_ITEMS')
    commit('SET_CARDS')
    commit('SET_GENERALS')
    commit('SET_REPAIRS')
  }
}
