
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  metros: [],
  customer: [],
  customerDetails: [],
  showOrder: false,
  modal: false
}

export default {
  state,
  mutations,
  actions,
  getters
}
