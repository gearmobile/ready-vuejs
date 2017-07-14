export default {
  'INIT_METROS' (state, payload) {
    state.metros = payload
  },
  'INIT_CUSTOMER' (state, payload) {
    state.customer = payload
  },
  'SET_CUSTOMER' (state, payload) {
    state.customerDetails = payload
  },
  'SHOW_ORDER' (state) {
    state.showOrder = !state.showOrder
  },
  'MODAL_TOGGLE' (state) {
    state.modal = !state.modal
  }
}
