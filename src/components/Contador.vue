<template>
  <div id="app">
<!--    <p> {{ idade }}</p>-->
    <h2> Contador </h2>
    <p> {{ count }}</p>
    <button @click="adicionar">+</button>
    <button @click="zerar">0</button>
    <button @click="diminuir">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { VALOR_INSERIDO_CONTADOR} from "@/store/const";

export default {
  name: "Contador",
  data() {
    return {
      contadorLocal: 2,
    };
  },
  computed: mapState(["count"]),
  /*computed: mapState({

    contador(state) {
      return state.count * this.contadorLocal;
      // idade: (state) => state.idade,
      // contador: 'count'
    }
  }),*/
  methods:{
    adicionar(){
      this.$store.commit('increment', {amount: VALOR_INSERIDO_CONTADOR});
    },
    diminuir(){
      this.$store.commit('diminuir', {amount: VALOR_INSERIDO_CONTADOR});
    },
    zerar(){
      this.$store.commit('zerar');
    }
  }
}
</script>

<style scoped>
  #app{
    border: 1px solid grey;
    margin: 15px;
    padding: 0 5px 15px;
}
</style>
