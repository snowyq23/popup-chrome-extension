<template>
  <div class="header">
    <div style="text-align: left; font-size: 20px">Filter By</div>
    <div id="filter-image">
      <FilterPanel
        v-model:min="minWidth"
        v-model:max="maxWidth"
        @filterUpdate="filterUpdate"
        >Width</FilterPanel
      >

      <FilterPanel
        v-model:min="minHeight"
        v-model:max="maxHeight"
        @filterUpdate="filterUpdate"
        >Height</FilterPanel
      >
    </div>

    <div id="selectAll">
      <input type="checkbox" @click="selectAll" /> <span>Select all</span>
      <div class="result">
        <div>
          Total <span>({{ raw.length }})</span>
        </div>
        <div>
          Results <span>({{ panel.length }})</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container" id="img-panel">
    <div v-for="item in panel" :key="item" class="imageDiv">
      <img :src="item.src" class="bes-img" />
      <input type="checkbox" class="bes-checkbox" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

import FilterPanel from "./FilterPanel.vue";

// Store
const store = useStore();

// Image List
const panel = computed(() => store.state.images.panel);
const raw = computed(() => store.state.images.raw);

// Width
const minWidth = ref(1);
const maxWidth = ref(100000);
// Height
const minHeight = ref(1);
const maxHeight = ref(100000);

/* Section: Select All */
function selectAll(event) {
  const items = document.querySelectorAll(".bes-checkbox");
  for (let item of items) {
    item.checked = event.target.checked;
  }
}
/* End Section: Select All */

/* Section: Image Filter */
function filterUpdate() {
  const filtered = raw.value.filter(
    (image) =>
      image.naturalWidth > minWidth.value &&
      image.naturalWidth < maxWidth.value &&
      image.naturalHeight > minHeight.value &&
      image.naturalHeight < maxHeight.value
  );
  store.commit("images/setPanel", filtered);
}
/* End Section: Image Filter */
</script>

<style lang="scss">
.header {
  display: block;

  #filter-image {
    display: flex;
    flex-direction: row;
  }

  #selectAll {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;

    input {
      margin-right: 0.5rem;
      width: 20px;
      height: 20px;
    }

    span {
      font-weight: bold;
      font-size: 16px;
    }

    .result {
      margin-left: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div {
        margin-left: 5px;
      }
      div.span {
        font-weight: bold;
      }
    }
  }
}

#img-panel.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  .imageDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 150px;
    height: 150px;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background: linear-gradient(#efcd5d, #e5c95b);
    box-shadow: 5px 5px 5px #00222266;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    input {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
