<template>
  <Transition name="fade" appear>
    <div class="modal-overlay" v-show="showModal" @click="$emit('close')"></div>
  </Transition>
  <Transition name="slide">
    <div class="modal-inner" v-show="showModal">
      <div class="modal-header text-h6">
        <div><img :src="logo" width="50" height="50" class="bes-logo" /></div>
        <button type="button" @click="$emit('close')">
          <font-awesome-icon icon="fa-solid fa-grip-lines" />
        </button>
      </div>
      <div class="modal-content">
        <ModalContent />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import ModalContent from "./ModalContent.vue";
import logo from "@/assets/bes.png";

defineProps({
  showModal: { type: Boolean, default: true },
});
defineEmits(["close"]);
</script>

<style lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.modal-overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.modal-inner {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2rem;
  background: #fff;
  z-index: 999;
  transform: none;
  color: black;
  overflow-y: scroll;

  .modal-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .modal-content {
    position: relative;
    background-clip: padding-box;
    padding: 1rem;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s linear;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: scaleX(0.3) translateX(-200%);
}

img {
  display: inline-block;
}
</style>
