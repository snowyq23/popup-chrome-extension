<template>
  <div class="main_in_app">
    <button class="btn">
      <font-awesome-icon icon="fa-regular fa-alicorn"></font-awesome-icon>
      <div>{{ msg }}</div>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const msg = ref("hello");
</script>

<style lang="scss">
.main_in_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 182px;
    height: 48px;
    background: #203146;
    border-radius: 4px;
    padding: 8px 16px;
  }
}
</style>
