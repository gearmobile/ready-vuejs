import Axios from 'axios'

Axios.defaults.baseURL = 'https://api.coinmarketcap.com/v1/ticker/'
// Axios.defaults.headers.common.Accept = 'application/json'
// Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default Axios
