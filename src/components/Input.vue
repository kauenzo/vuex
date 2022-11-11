<template>
  <div id="input">
    <h1>Input</h1>
    <p> {{ contador }}</p>
  </div>
</template>

<script>
export default {
  name: "Input",
  computed: {
    contador(){
      return this.$store.state.count;
    }
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