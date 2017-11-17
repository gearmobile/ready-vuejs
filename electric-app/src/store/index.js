import Vue from 'vue'
import Vuex from 'vuex'
import emptyArray from '../utils/emptyArray'

Vue.use(Vuex)

const state = {
  points: [
    {
      min: 0,
      max: 10,
      step: 1,
      title: 'Квадратура помещения',
      priceWork: 101,
      priceMaterial: 102,
      name: 'area'
    },
    {
      min: 0,
      max: 10,
      step: 1,
      title: 'Розетки (220 V)',
      priceWork: 201,
      priceMaterial: 202,
      name: 'socket'
    },
    {
      min: 0,
      max: 10,
      step: 1,
      title: 'Розетки ТВ',
      priceWork: 301,
      priceMaterial: 302,
      name: 'tv'
    },
    {
      min: 0,
      max: 10,
      step: 1,
      title: 'Розетки телефон, интернет',
      priceWork: 401,
      priceMaterial: 402,
      name: 'phone'
    },
    {
      min: 0,
      max: 10,
      step: 1,
      title: 'Выключатели',
      priceWork: 501,
      priceMaterial: 502,
      name: 'switch'
    },
    {
      min: 0,
      max: 10,
      step: 1,
      title: 'Люстра, светильник, бра',
      priceWork: 601,
      priceMaterial: 602,
      name: 'bra'
    },
    {
      min: 0,
      max: 10,
      step: 1,
      title: 'Точечный свет',
      priceWork: 701,
      priceMaterial: 702,
      name: 'light'
    }
  ],
  selectAdditional: [
    {
      label: 'Звонок',
      value: 'bell',
      priceWork: 100,
      priceMaterial: 100
    },
    {
      label: 'Заземление',
      value: 'grounding',
      priceWork: 110,
      priceMaterial: 110
    },
    {
      label: 'Щиток в подъезде',
      value: 'flapEntrance',
      priceWork: 120,
      priceMaterial: 120
    },
    {
      label: 'Щиток в помещении',
      value: 'flapIndoors',
      priceWork: 130,
      priceMaterial: 130
    }
  ],
  selectMaterial: [
    { label: 'Кирпич', value: 'brick', ratio: 1 },
    { label: 'Бетон', value: 'concrete', ratio: 1.2 },
    { label: 'Дерево', value: 'wood', ratio: 1.1 },
    { label: 'Блоки', value: 'blocks', ratio: 1.4 },
    { label: 'Гипсокартон', value: 'drywall', ratio: 0.8 }
  ],
  description: [
    {
      title: 'Выберите материал',
      subtitle: 'Сначала нужно выбрать материал, из которого изготовлены стены вашей квартиры. Наведите курсор мыши на соответствующее окошко и кликните по нему'
    },
    {
      title: 'Общая площадь помещений',
      subtitle: 'Затем определитесь с общей площадью помещений, в которых предполагается произвести работы. В форме «Квадратура помещения» нажимайте на кнопки + или – для ввода общей площади помещений, в которых предстоит произвести работы. Ввод можно произвести и вручную с клавиатуры.'
    },
    {
      title: 'Количество розеток',
      subtitle: 'Выбирайте в соответствующих полях необходимое Вам количество различных розеток, которые хотите установить. Подумайте о кухне. Сколько у вас в хозяйстве электроприборов (холодильник, микроволновка, посудомоечная машина и т. д.).'
    },
    {
      title: 'Осветительные приборы',
      subtitle: 'Тем же способом введите количество осветительных приборов, которые предстоит смонтировать. Введите количество выключателей, которыми они будут включаться.'
    },
    {
      title: 'Поставьте или снимите галочки',
      subtitle: 'Поставьте или снимите галочки в полях «Звонок», «Щиток в подъезде», «Щиток в помещении в соответствии со своим выбором.'
    },
    {
      title: 'Рассчитать стоимость',
      subtitle: 'Закончив ввод, нажмите на кнопку «Рассчитать стоимость». Нажав эту кнопку, вы получите «Перечень работ», «Перечень материалов» и их стоимость. Будет отражен и размер предоставляемой скидки.'
    }
  ],
  order: [],
  material: 'brick',
  additional: [],
  discount: 10,
  isStart: false
}

const mutations = {
  'ADD_ORDER' (state, payload) {
    const sample = state.order.find(el => el.name === payload.name)
    if (!sample) {
      const orderNew = {
        name: payload.name,
        title: payload.title,
        priceWork: payload.priceWork,
        priceMaterial: payload.priceMaterial,
        quantity: payload.value
      }
      state.order.push(orderNew)
    } else {
      sample.quantity += payload.step
    }
  },
  'REMOVE_ORDER' (state, payload) {
    const sample = state.order.find(el => el.name === payload.name)
    if (sample.quantity > 1) {
      sample.quantity -= payload.step
    } else {
      state.order.splice(state.order.indexOf(payload), 1)
    }
  },
  'SET_MATERIAL' (state, payload) {
    emptyArray(state.order)
    emptyArray(state.additional)
    state.material = payload
  },
  'CLEAR_ORDER' (state) {
    emptyArray(state.order)
    state.material = 'brick'
  },
  'CLEAR_ADDITIONAL' (state) {
    emptyArray(state.additional)
  },
  'CLEAR_SWITCH' (state) {
    emptyArray(state.order)
  },
  'SET_ADDITIONAL' (state, payload) {
    state.additional = payload
  }
}

const actions = {
  addOrder ({ commit }, payload) {
    commit('ADD_ORDER', payload)
  },
  removeOrder ({ commit }, payload) {
    commit('REMOVE_ORDER', payload)
  },
  clearOrder ({ commit }) {
    commit('CLEAR_ORDER')
  },
  clearAdditional ({ commit }) {
    commit('CLEAR_ADDITIONAL')
  },
  clearSwitch ({ commit }) {
    commit('CLEAR_SWITCH')
  },
  setMaterial ({ commit }, payload) {
    commit('SET_MATERIAL', payload)
  },
  setAdditional ({ commit }, payload) {
    commit('SET_ADDITIONAL', payload)
  }
}

const getters = {
  getData (state) {
    return state.points
  },
  getMaterial (state) {
    return state.material
  },
  getDescription (state) {
    return state.description
  },
  // ------------------------
  // СТОИМОСТЬ МАТЕРИАЛОВ
  // ------------------------
  getCostMaterialMain (state) { // стоимость основных материалов
    const result = state.order.reduce((total, currentIndex) => {
      return total + currentIndex.quantity * currentIndex.priceMaterial
    }, 0)
    return result
  },
  getCostMaterialAdditional (state, getters) { // стоимость дополнительных материалов
    let result = 0
    getters.getAdditional.forEach((item) => {
      const sample = state.selectAdditional.find(el => el.value === item)
      result += sample.priceMaterial
    })
    return result
  },
  getCostMaterialCommon (state, getters) { // стоимость всех материалов
    return getters.getCostMaterialMain + getters.getCostMaterialAdditional
  },
  // ------------------------
  // СТОИОМСТЬ РАБОТ
  // ------------------------
  getMaterialRatio (state, getters) { // коэффициент трудозатрат в зависимости от материала
    const result = state.selectMaterial.find(el => el.value === getters.getMaterial)
    return result.ratio
  },
  getCostMaterialMainWork (state, getters) { // стоимость работы с основными материалами
    const result = state.order.reduce((total, currentIndex) => {
      return total + currentIndex.quantity * (currentIndex.priceWork * getters.getMaterialRatio)
    }, 0)
    return result
  },
  getCostMaterialAdditionalWork (state, getters) { // стоимость работы с дополнительными материалами
    let result = 0
    getters.getAdditional.forEach((item) => {
      const sample = state.selectAdditional.find(el => el.value === item)
      result += sample.priceWork
    })
    return result
  },
  getCostCommonWork (state, getters) { // стоимость всех работ
    return getters.getCostMaterialMainWork + getters.getCostMaterialAdditionalWork
  },
  getCostCommonWorkDiscount (state, getters) { // скидка 10 процентов от общей стоимости работ
    return getters.getCostCommonWork * (state.discount / 100)
  },
  getCostCommonWorkWithDiscount (state, getters) { // стоимость всех работ с учетом скидки
    return getters.getCostCommonWork - getters.getCostCommonWorkDiscount
  },
  // ------------------------
  // ОБЩАЯ СТОИМОСТЬ
  // ------------------------
  getCostTotal (state, getters) { // стоимость работы и материалов
    return getters.getCostMaterialCommon + getters.getCostCommonWorkWithDiscount
  },
  // ------------------------
  // ОТКЛЮЧИТЬ КНОПКУ ЕСЛИ ВВОДА НЕТ
  // ------------------------
  getCheckInputs (state) {
    return state.order.length !== 0 || state.additional.length !== 0
  },
  getSupport (state) {
    return state.selectAdditional
  },
  getSelectMaterial (state) {
    return state.selectMaterial
  },
  getAdditional (state) {
    return state.additional
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
