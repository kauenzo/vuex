import { createStore } from 'vuex'

export default createStore({
  /*state: {
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
  }*/
  state: {
    todos: [
      {id: 1, text: 'Lavar roupa', done: true},
      {id: 2, text: 'Limpar casa', done: true},
      {id: 3, text: 'Sair', done: false}
    ]
  },
  getters: {
    /*todosDone (state){
      return state.todos.filter((todo) => todo.done)
    },*/
    todosDone:  (state) => state.todos.filter((todo) => todo.done),
    todosDoneCount: (state, getters) => getters.todosDone.length,

    // todoGetById: state => id => state.todos.find(todo => todo.id === id).

    todoGetById(state){
      return function (id){
        return state.todos.find(todo => todo.id === id);
      }
    },
  }
})
