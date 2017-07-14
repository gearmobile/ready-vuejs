
export default {
  // ГРЯЗНАЯ СУММА
  getDirtySum (state) {
    const result = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    return result
  },
  // ЧИСТАЯ СУММА
  getCleanSum (state, getters, rootgGetters) {
    let result = getters.getDirtySum
    if (getters.getPromoSum) {
      result -= getters.getPromoSum
    } else if (getters.getDiscountSum) {
      result -= getters.getDiscountSum
    }
    return result
  },
  // ОБЩЕЕ ВРЕМЯ РАБОТЫ
  getTime (state) {
    const result = (state.order.reduce((sum, c) => sum + c.time, 0))
    return result
  },
  // ЧИСЛО СПЕЦИАЛИСТОВ
  getWorkers (state, getters) {
    const maxHours = 180
    const worker = getters.getTime > maxHours ? 2 : 1
    return worker
  },
  getOrders (state) {
    return state.order
  }
}
