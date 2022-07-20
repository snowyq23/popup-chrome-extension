<template>
  <div class="header">
    <div style="text-align: left; font-size: 20px">Filter By</div>
    <div id="filter-image">
      <FilterPanel
        :min="minWidth"
        @update:min="(newVal) => setMinWidth(newVal)"
        :max="maxWidth"
        @update:max="(newVal) => setMaxWidth(newVal)"
        >Width</FilterPanel
      >

      <FilterPanel
        :min="minHeight"
        @update:min="(newVal) => setMinHeight(newVal)"
        :max="maxHeight"
        @update:max="(newVal) => setMaxHeight(newVal)"
        >Height</FilterPanel
      >
    </div>

    <div class="btn-panel">
      <div class="inline">
        <input type="checkbox" @click="selectAll" />
        <span>Select all</span>
      </div>

      <div class="inline">
        <button @click="deleteMultiple" class="hover-color">
          <font-awesome-icon icon="fa-solid fa-circle-minus" />
          <span>Delete</span>
        </button>
      </div>

      <div class="inline">
        <button
          class="hover-color"
          @click="submit"
          :disabled="disableSubmit"
          :class="{ 'disable-button': disableSubmit }"
        >
          <font-awesome-icon icon="fa-solid fa-paper-plane" />
          <span>Submit</span>
        </button>
      </div>

      <div id="bes-result">
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
      <input
        type="checkbox"
        class="bes-checkbox"
        :value="checked"
        @change="
          (event) => {
            checked = event.target.checked;
            item.isSelected = checked;
          }
        "
      />

      <button @click="removePerImage(item)" class="hover-color">
        <font-awesome-icon icon="fa-solid fa-trash-can" class="bes-remove" />
      </button>
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

// Auth
const disableSubmit = computed(() => store.state.auth.disableSubmit);

// Image List
const panel = computed(() => store.state.images.panel);
const raw = computed(() => store.state.images.raw);

// Width
const minWidth = computed(() => store.state.images.minWidth);
const maxWidth = computed(() => store.state.images.maxWidth);
// Height
const minHeight = computed(() => store.state.images.minHeight);
const maxHeight = computed(() => store.state.images.maxHeight);

// Checkbox
const checked = ref(false);

/* Section: Select All */
function selectAll(event) {
  store.commit("images/selectAll", event.target.checked);
}

/* End Section: Select All */

/* Section: Delete Multiple */
function deleteMultiple() {
  store.dispatch("images/deleteMultiple");
}
/* End Section: Delete Multiple */

/* Section: Image Filter */
function setMinWidth(val) {
  store.commit("images/setMinWidth", val);
  store.dispatch("images/filterImages");
}
function setMaxWidth(val) {
  store.commit("images/setMaxWidth", val);
  store.dispatch("images/filterImages");
}
function setMinHeight(val) {
  store.commit("images/setMinHeight", val);
  store.dispatch("images/filterImages");
}
function setMaxHeight(val) {
  store.commit("images/setMaxHeight", val);
  store.dispatch("images/filterImages");
}

/* Section: Remove ONE image */
function removePerImage(image) {
  store.commit("images/hideImage", image.src);
  const result = panel.value.filter((el) => el !== image);
  store.commit("images/setPanel", result);
  store.commit("images/setRaw", result);
}
/* End Section: Remove ONE image */

/* Section: Submit folder of images */
function submit() {
  // const submitted = panel.value.filter((el) => el.isSelected === true);
  alert("Uploaded");
}
/* End Section: Submit folder of images */
</script>

<style lang="scss">
.header {
  display: block;

  #filter-image {
    display: flex;
    flex-direction: row;
  }

  .btn-panel {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    justify-content: space-between;

    .inline {
      display: inline-flex;
    }

    .disable-button {
      color: gray;
    }

    input {
      width: 24px;
      height: 24px;
    }

    span {
      font-weight: bold;
      font-size: 16px;
      margin-left: 5px;
    }

    #bes-result {
      display: flex;
      flex-direction: row;

      div {
        margin-left: 5px;
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
      top: 0px;
      right: 0px;
      width: 20px;
      height: 20px;
    }

    .bes-remove {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
