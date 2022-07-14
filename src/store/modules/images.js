/* eslint-disable prettier/prettier */
// initial state
const state = {
 panel: [],
 raw: [],
 minWidth: 1,
 minHeight: 1,
};

// getters
const getters = {};

// actions
const actions = {
 getAllImages({ commit }) {
  const images = document.querySelectorAll("img:not(.bes-img):not(.bes-logo)");
  const tempArr = Array.from(images).map((image) => ({
   src: image.src,
   naturalHeight: image.naturalHeight,
   naturalWidth: image.naturalWidth,
  }));
  const rawArr = [...state.raw].concat(tempArr);
  let uniqueArr = [];
  rawArr.forEach((el) => {
   if (
    !uniqueArr.includes(el.src) &&
    el.naturalHeight >= state.minHeight &&
    el.naturalWidth >= state.minWidth
   ) {
    uniqueArr.push(el);
   }
  });

  setTimeout(() => {
   commit("setPanel", uniqueArr);
   commit("setRaw", uniqueArr);
  }, 1000);
 },
};

// mutations
const mutations = {
 setPanel(state, images) {
  state.panel = images;
 },
 setRaw(state, images) {
  state.raw = images;
 },
};

export default {
 namespaced: true,
 state,
 getters,
 actions,
 mutations,
};
