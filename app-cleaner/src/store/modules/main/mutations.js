export default {
  'SET_DATA' (state, payload) {
    state.data = payload
  },
  'SET_ITEMS' (state) {
    state.items = state.data.filter(el => /room|bathroom/.test(el.name))
  },
  'SET_CARDS' (state, payload) {
    state.cards = state.data.filter(el => /fridge|oven|microwave|kitchen|crockery|ironing|pane|balcony|wardrobe|addtime/.test(el.name))
  },
  'SET_GENERALS' (state) {
    state.generals = state.data.filter(el => /ironing|pane|wardrobe/.test(el.name))
  },
  'SET_REPAIRS' (state) {
    state.repairs = state.data.filter(el => /pane|wardrobe|addtime/.test(el.name))
  }
}
