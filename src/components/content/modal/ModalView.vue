<template>
  <Transition name="fade" appear>
    <div class="modal-overlay" v-show="showModal" @click="$emit('close')"></div>
  </Transition>
  <Transition name="slide">
    <div class="modal-inner" v-show="showModal">
      <div class="modal-header text-h6">
        <div><img :src="logo" width="50" height="50" class="bes-logo" /></div>
        <div class="right-menu">
          <button type="button" id="bes-reset" @click="reset">
            <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
          </button>
          <button type="button" id="bes-authenticate" @click="showAuth = true">
            <font-awesome-icon icon="fa-solid fa-key" />
          </button>
          <button type="button" id="bes-close-modal" @click="$emit('close')">
            <font-awesome-icon icon="fa-solid fa-grip-lines" />
          </button>
        </div>
      </div>
      <div class="modal-content">
        <ModalContent />
      </div>
    </div>
  </Transition>

  <AuthModal
    :showPopup="showAuth"
    :currentToken="currentToken"
    @closePopup="showAuth = false"
    v-model:val="newToken"
    @confirm="addToken(newToken)"
  />
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from "vue";
import { useStore } from "vuex";
import ModalContent from "./ModalContent.vue";
import logo from "@/assets/bes.png";
import AuthModal from "../auth/AuthModal.vue";

defineProps({
  showModal: { type: Boolean, default: true },
});
defineEmits(["close"]);

const store = useStore();

const reset = () => {
  store.dispatch("images/resetAll");
};

/* Section: Authentication */
const showAuth = ref(false);
const hasToken = ref(false);
const newToken = ref("");
const currentToken = computed(() => store.state.auth.authToken);
const addToken = (text) => {
  if (text != "") {
    hasToken.value = true;
  }
  store.commit("auth/setToken", text);
};
/* End Section: Authentication */
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

    button {
      margin: 0px 5px;
    }
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
