<template>
  <Transition name="ease-out">
    <div class="auth-overlay">
      <div class="auth-inner">
        <div class="header">
          <button
            type="button"
            class="bes-btn-close"
            @click="$emit('closePopup')"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </div>

        <div style="font-weight: bold; font-size: 20px">AUTHENTICATION</div>

        <div>
          <input
            class="fill-in"
            type="text"
            placeholder="Please enter the token"
            :value="val"
            @input="$emit('update:val', $event.target.value)"
            @keyup.enter="$emit('confirm')"
          />
        </div>

        <div class="display-token">
          <div class="token-title">Current token:</div>
          <p class="text-highlight">{{ currentToken }}</p>
        </div>

        <div class="footer">
          <button
            type="button"
            class="bes-footer-btn"
            @click="$emit('confirm')"
          >
            ADD
          </button>

          <button
            type="button"
            class="bes-footer-btn"
            @click="$emit('closePopup')"
          >
            DONE
          </button>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </Transition>
  <!-- <Transition name="ease-out">
    
  </Transition> -->
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  showPopup: { type: Boolean, default: false },
  val: { type: String, default: "" },
  currentToken: { type: String },
});
defineEmits(["closePopup", "update:val", "confirm"]);
</script>

<style lang="scss">
.auth-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  // overflow-x: scroll;
  // overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9990;
}

.auth-inner {
  // text-align: right;
  overflow-x: auto;
  width: 500px;
  height: 300px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // position: fixed;
  // top: 0;
  // left: 0;
  // margin: 300px auto;
  padding: 1rem 2rem;
  // margin: 300px auto;
  background: #fff;
  // z-index: 9999;
  transform: none;
  color: black;
  z-index: 9999;

  .header {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
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

  div.display-token {
    word-wrap: break-word;

    .token-title {
      font-weight: bold;
      text-align: left;
    }

    .text-highlight {
      background: rgb(227, 212, 212);
      font-style: italic;
      border-radius: 4px;
      margin: 0.75rem 0;
    }
  }

  .footer {
    button.bes-footer-btn {
      text-align: center;
      width: 100px;
      margin: 1rem 2rem;
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
