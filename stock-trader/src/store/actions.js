import Vue from 'vue'

export const loadData = ({ commit }) => {
  Vue.http.get('stocks.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const portfolio = {
          funds: data.funds,
          stocks: data.portfolioStocks
        }
        commit('SET_STOCKS', data.originalStocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}
