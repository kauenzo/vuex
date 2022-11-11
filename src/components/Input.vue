<template>
  <div id="input">
    <h1>Input</h1>
<!--    <p> {{ contador }}</p>-->
    <p> <strong>ID:</strong> {{ todoId }}
      <strong>Tarefa:</strong> {{ todoText }}
      <strong>Status:</strong> {{ todoDone }}</p>
  </div>
</template>

<script>
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
      return this.$store.getters.todoGetById(2).id;
    },
    todoText(){
      return this.$store.getters.todoGetById(2).text;
    },
    todoDone(){
      return this.$store.getters.todoGetById(2).done;
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