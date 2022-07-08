<template>
  <div class="filter-panel">
    <h5><slot /></h5>
    <form class="range-size">
      <span class="range-left">
        <input
          type="tel"
          maxlength="8"
          name="size-min-value"
          :value="min"
          @input="$emit('update:min', $event.target.value)"
          @keyup.enter="$emit('filterUpdate')"
        />
        <label class="place-holder">px</label>
      </span>
      <span class="range-right">
        <input
          type="tel"
          maxlength="8"
          name="size-max-value"
          :value="max"
          @input="$emit('update:max', $event.target.value)"
          @keyup.enter="$emit('filterUpdate')"
        />
        <label class="place-holder">px</label>
      </span>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({ min: String, max: String });
defineEmits(["filterUpdate"]);
</script>

<style lang="scss">
.filter-panel {
  max-width: 80%;
  margin: 0 auto;

  .range-size {
    display: block;
    overflow: hidden;
    padding: 5px 0 20px;
    position: relative;

    span {
      padding: 7px;
      border: 1px solid #bdbdbd;
      border-radius: 4px;
      z-index: 1;
      position: relative;
      background: #fff;
    }
    span.range-left {
      float: left;
      margin: 5px;
    }
    span.range-right {
      float: right;
      margin: 5px;
    }

    input {
      border: 0;
      max-width: 50px;
      text-align: right;
      font-size: 14px;
      float: left;
      background-color: #fff;
    }

    label.place-holder {
      color: #bdbdbd;
      font-size: 14px;
      float: left;
      padding-left: 5px;
    }
  }
}
</style>
