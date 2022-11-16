import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    increment(state, payload){
      state.count+= payload.amount
    },
    diminuir(state, payload){
      state.count-= payload.amount
    },
    zerar(state){
      state.count = 0
    },
  },
  actions: {
  },
  modules: {
  }
})
