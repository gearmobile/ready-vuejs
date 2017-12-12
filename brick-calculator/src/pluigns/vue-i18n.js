/* ============
* Vue i18n
* ============
*/
import state from '../store/state'
import Vue from 'vue'
import Vue18n from 'vue-i18n'
import locales from '../locale'

Vue.use(Vue18n)

export const i18n = new Vue18n({
  locale: state.language.primary,
  fallbackLocale: state.language.primary,
  messages: locales,
  numberFormats: locales
})

export default { i18n }
