import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  data: [],
  items: [],
  cards: [],
  generals: [],
  repairs: []
}

export default {
  state,
  getters,
  mutations,
  actions
}
