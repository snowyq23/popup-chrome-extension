<template>
  <div class="main_in_app">
    <div class="text-center">
      <button @click="isOpen = true" class="btn" id="button-in-app">
        <font-awesome-icon icon="fa-brands fa-angellist" />
        <div style="padding: 10px">HELLO</div>
      </button>

      <ModalView :showModal="isOpen" @close="isOpen = !isOpen">
        <font-awesome-icon icon="fa-brands fa-500px" />
      </ModalView>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalView from "../components/content/modal/ModalView.vue";

const isOpen = ref(false);
</script>

<style lang="scss">
.main_in_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  // background-color: #415062;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 182px;
    height: 48px;
    background: #51729b;
    border-radius: 4px;
    padding: 8px 16px;
  }
  .btn:hover {
    background: #415062;
  }
}
.menu-left {
  position: fixed;
  left: 0px;
}
</style>
