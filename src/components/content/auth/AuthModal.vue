<template>
  <Transition name="fade" appear>
    <div
      class="auth-overlay"
      v-show="showPopup"
      @click="$emit('closePopup')"
    ></div>
  </Transition>
  <Transition name="ease-out">
    <div class="auth-inner" v-show="showPopup">
      <div style="font-weight: bold; font-size: 20px">AUTHENTICATION</div>

      <button type="button" class="bes-btn-close" @click="$emit('closePopup')">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>

      <div>
        <input
          class="fill-in"
          type="text"
          placeholder="Please enter the token"
          :value="val"
          @input="$emit('update:val', $event.target.value)"
        />
      </div>

      <div class="display-fill-in">
        <div class="token-title">Current token:</div>
        <p>{{ currentToken }}</p>
      </div>

      <div class="footer">
        <button type="button" class="bes-btn-confirm" @click="$emit('confirm')">
          OK
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  showPopup: { type: Boolean, default: false },
  val: { type: String, default: "" },
  currentToken: { type: String },
});
defineEmits(["closePopup", "update:val"]);
</script>

<style lang="scss">
.auth-overlay {
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
  z-index: 9998;
}

.auth-inner {
  max-width: 500px;
  max-height: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30%;
  right: 30%;
  bottom: 30%;
  left: 30%;
  padding: 2rem;
  background: #fff;
  z-index: 9999;
  transform: none;
  color: black;

  button.bes-btn-close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    padding: 0.5rem 1rem;
  }

  input.fill-in {
    // position: relative;
    // width: 100px;
    // height: 300px;
    width: 100%;
    margin: 1rem 0;
    padding: 0 5px;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    overflow-wrap: break-word;
    // word-break: break-all;
    // word-wrap: break-word;
  }

  div.display-fill-in {
    word-wrap: break-word;

    .token-title {
      font-weight: bold;
      text-align: left;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 80%;

    button.bes-btn-confirm {
      text-align: center;
      width: 50px;
      margin-bottom: 1rem;
      font-weight: bold;
      font-size: 1rem;
      border: 1px solid #bdbdbd;
      border-radius: 4px;
      background: #111;
      color: white;
    }
  }
}
</style>
