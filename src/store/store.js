import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    idade: 22
  },
  getters: {
  },
  mutations: {
    increment: state => state.count++,
    diminuir: state => state.count--,
    zerar: state => state.count = 0,
  },
  actions: {
  },
  modules: {
  }
})
