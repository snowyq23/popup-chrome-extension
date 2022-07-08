<template>
  <div class="header">
    <h4>Filter By</h4>
    <div id="filter-image">
      <FilterPanel
        v-model:min="minWidth"
        v-model:max="maxWidth"
        @filterUpdate="filterWidth"
        >Width</FilterPanel
      >

      <FilterPanel
        v-model:min="minHeight"
        v-model:max="maxHeight"
        @filterUpdate="filterHeight"
        >Height</FilterPanel
      >
    </div>

    <div id="selectAll">
      <input type="checkbox" @click="selectAll" /> <span>Select all</span>
    </div>
  </div>
  <div class="container" id="img-panel">
    <div v-for="item in imageList" :key="item" class="imageDiv">
      <img :src="item" class="bes-img" />
      <input type="checkbox" class="bes-checkbox" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FilterPanel from "./FilterPanel.vue";

// Image List
const imageList = ref([]);
// Width
const minWidth = ref(500);
const maxWidth = ref(1000);
// Height
const minHeight = ref(500);
const maxHeight = ref(1000);

/* Section: Receive URL list from popup */
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  addImagesToContainer(message);
  sendResponse("OK");
});

function addImagesToContainer(urls) {
  alert("Updated");
  const list = Object.values(urls);
  imageList.value = list;
}
/* End Section: Receive URL list from popup */

/* Section: Select All */
function selectAll(event) {
  const items = document.querySelectorAll(".bes-checkbox");
  for (let item of items) {
    item.checked = event.target.checked;
  }
}
/* End Section: Select All */

/* Section: Image Filter */
function filterWidth() {
  var imgEl;
  var filterResult = [];
  imageList.value.forEach((el) => {
    imgEl = document.querySelector(`img[src="${el}"]`);
    var realWidth = imgEl.naturalWidth;
    if (realWidth > minWidth.value) {
      filterResult.push(el);
    }
  });
  imageList.value = filterResult;
}

function filterHeight() {
  var imgEl;
  var filterResult = [];
  imageList.value.forEach((el) => {
    imgEl = document.querySelector(`img[src="${el}"]`);
    var realHeight = imgEl.naturalHeight;
    if (realHeight > minHeight.value) {
      filterResult.push(el);
    }
  });
  imageList.value = filterResult;
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
