const actions = {
  setLanguage ({ commit }, payload) {
    commit('SET_LANGUAGE', payload)
  },
  closeAlert ({ commit }) {
    commit('CLOSE_ALERT')
  },
  setMasonry ({ commit }, payload) {
    commit('SET_MASONRY', payload)
  },
  // SEAM SECTION
  setSeam ({ commit }, payload) {
    commit('SET_SEAM', payload)
  },
  resetSeamValue ({ commit }) {
    commit('RESET_SEAM_VALUE')
  },
  // BRICK SECTION
  setBrick ({ commit }, payload) {
    commit('SET_BRICK', payload)
  },
  resetBrickValue ({ commit }) {
    commit('RESET_BRICK_VALUE')
  },
  // BUILDING SECTION
  setLength ({ commit }, payload) {
    commit('SET_LENGTH', payload)
  },
  setWidth ({ commit }, payload) {
    commit('SET_WIDTH', payload)
  },
  setHeight ({ commit }, payload) {
    commit('SET_HEIGHT', payload)
  },
  clearBuildingFields ({ commit, dispatch }) {
    dispatch('setLength', null)
    dispatch('setWidth', null)
    dispatch('setHeight', null)
  },
  // OPENING SECTION
  addComponent ({ commit }) {
    commit('ADD_COMPONENT')
  },
  removeComponent ({ commit }, payload) {
    commit('REMOVE_COMPONENT', payload)
  },
  setOpeningWidth ({ commit }, payload) {
    commit('SET_OPENING_WIDTH', payload)
  },
  setOpeningHeight ({ commit }, payload) {
    commit('SET_OPENING_HEIGHT', payload)
  },
  resetFieldsOpening ({ commit }) {
    commit('RESET_OPENING_FIELDS')
  },
  getRUBRate ({ commit }) {
    commit('GET_RUB_RATE')
  }
}

export default actions
