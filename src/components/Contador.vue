<template>
  <div id="app">
<!--    <p> {{ idade }}</p>-->
<!--    <h2> Contador </h2>
    <p> {{ count }}</p>
    <button @click="adicionar">+</button>
    <button @click="zerar">0</button>
    <button @click="diminuir">-</button>-->
    <h2>Contador</h2>
    <p> {{todosDone}}</p>
    <p> Quantidade: {{ todosDoneCount }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Contador",
  /*data() {
    return {
      contadorLocal: 2,
    };
  },
  computed: mapState(["count"]),
  /!*computed: mapState({

    contador(state) {
      return state.count * this.contadorLocal;
      // idade: (state) => state.idade,
      // contador: 'count'
    }
  }),*!/
  methods:{
    adicionar(){
      this.$store.commit('increment');
    },
    diminuir(){
      this.$store.commit('diminuir');
    },
    zerar(){
      this.$store.commit('zerar');
    }
  }*/
  computed: {
    todosDone(){
      return this.$store.getters.todosDone;
    },
    todosDoneCount(){
      return this.$store.getters.todosDoneCount;
    }
  },
}
</script>

<style scoped>
  #app{
    border: 1px solid grey;
    margin: 15px;
    padding: 0 5px 15px;
}
</style>