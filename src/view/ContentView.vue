<template>
  <div class="main_in_app">
    <button @click="openModal" class="btn">
      <font-awesome-icon icon="fa-solid fa-solar-panel" />
      <div>IMAGE PANEL</div>
    </button>

    <button @click="scan" class="btn">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <div>SCAN</div>
    </button>

    <ModalView :showModal="isOpen" @close="closeModal"> </ModalView>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import ModalView from "../components/content/modal/ModalView.vue";

const store = useStore();

/* MODAL */
const isOpen = computed(() => store.state.modal.isOpen);
const openModal = () => store.commit("modal/openModal");
const closeModal = () => store.commit("modal/closeModal");

/* SCAN */
const scan = () => {
  store.commit("modal/openModal");
  store.dispatch("images/getAllImages");
};
</script>

<style lang="scss">
#bes-extension {
  position: fixed;
  top: 0;
  right: 10%;
  z-index: 9999;
  padding: 20px 0;
  background: linear-gradient(rgb(153, 156, 130), rgb(190, 186, 134));
  border-radius: 10px;
  box-shadow: 5px;
}

.main_in_app {
  font-family: "Ave10pxnir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  position: relative;
  display: flex;
  justify-content: space-between;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 48px;
    background: rgb(81, 121, 155);
    border-radius: 4px;
    padding: 4px 8px;
    margin: 0px 5px;
    font-size: 15px;
  }
  .btn:hover {
    background: #415062;
  }

  .btn div {
    padding-left: 5px;
  }

  .hover-color:hover {
    color: rgba(0, 115, 255, 0.754);
  }
}
.menu-left {
  position: fixed;
  left: 0px;
}
</style>
