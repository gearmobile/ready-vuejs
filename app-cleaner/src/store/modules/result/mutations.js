export default {
  'ADD_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record) {
      record.quantity += payload.step
      record.time += payload.time
    } else {
      const order = {
        name: payload.name,
        price: payload.price,
        time: payload.time,
        title: payload.title,
        quantity: payload.step,
        singular: payload.singular,
        plural: payload.plural,
        few: payload.few
      }
      state.order.push(order)
    }
  },
  'DELETE_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record.quantity > payload.step) {
      record.quantity -= payload.step
      record.time -= payload.time
    } else {
      state.order.splice(state.order.indexOf(payload), 1)
    }
  }
}
