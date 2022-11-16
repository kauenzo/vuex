<template>
  <div id="input">
    <h1>Input</h1>
<!--    <p> {{ contador }}</p>-->
      <p>
        <strong>ID:</strong> {{ todoId }}
        <strong>Tarefa:</strong> {{ todoText }}
        <strong>Status:</strong> {{ todoDone }}
      </p>
  </div>
</template>

<script>
import {
  ID_CONTADOR
} from "../store/const";
export default {
  name: "Input",
  /*computed: {
    contador(){
      return this.$store.state.count;
    }
  }*/
  computed: {
    todosDone(){
      return this.$store.getters.todosDone;
    },
    todoId(){
      return this.$store.getters.todoGetById(ID_CONTADOR).id;
    },
    todoText(){
      return this.$store.getters.todoGetById(ID_CONTADOR).text;
    },
    todoDone(){
      return this.$store.getters.todoGetById(ID_CONTADOR).done;
    },
  }
}
</script>

<style scoped>
  #input{
    border: 1px solid black;
    margin: 15px;
    padding: 5px;
  }
</style>
