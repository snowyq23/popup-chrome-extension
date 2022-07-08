<template>
  <div class="wrapper">
    <div>Quick Settings</div>

    <div class="row" @click="isDark = !isDark">
      <label class="col">
        <div>Dark Mode</div>

        <div class="toggle" :class="[{ on: isDark }, { off: !isDark }]">
          <div class="label">{{ isDark ? "ON" : "OFF" }}</div>
          <div class="circle">{{ changeBg() }}</div>
        </div>
      </label>
    </div>

    <ImagePanel></ImagePanel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImagePanel from "../image-collect/ImagePanel.vue";

// Dark Mode
const isDark = ref(false);
function changeBg() {
  if (isDark.value === true) document.body.style.backgroundColor = "black";
  else document.body.style.backgroundColor = "var(--body-bg)";
}
</script>

<style lang="scss">
.row {
  cursor: default;
  user-select: none;
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  margin: auto;
}

.col {
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;

  .toggle {
    border-radius: 10px;
    display: flex;
    vertical-align: baseline;
    margin-top: 2px;
    transition: background 0.2s;
  }

  .toggle {
    position: absolute;
    right: 0;
    width: 48px;
    height: 20px;
  }

  .on {
    flex-direction: row;
  }

  .toggle.on {
    background: #11a683;
    transition: background 0.3s;

    .circle {
      left: 30px;
    }
  }

  .off {
    flex-direction: row-reverse;
  }

  .toggle.off {
    background: #6d758d;
  }

  .label {
    width: 24px;
    height: 100%;
    margin: 0 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #fff;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle {
    left: 2px;
    top: 2px;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: #fff !important;
    display: inline-block;
    transition: left 0.2s, background 0.2s;
  }
}
</style>
