import customer from '../../../data/data.json'
import metros from '../../../data/metros.json'

export default {
  initMetros ({ commit }) {
    commit('INIT_METROS', metros)
  },
  initCustomer ({ commit }) {
    commit('INIT_CUSTOMER', customer.customer)
  },
  setCustomer ({ commit }, payload) {
    commit('SET_CUSTOMER', payload)
  },
  showOrder ({ commit }) {
    commit('SHOW_ORDER')
  },
  modalToggle ({ commit }) {
    commit('MODAL_TOGGLE')
  }
}
