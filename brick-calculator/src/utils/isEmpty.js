import toNumber from 'lodash.tonumber'
import isNull from 'lodash.isnull'

export default (value) => {
  return isNull(value) ? 0 : toNumber(value)
}
