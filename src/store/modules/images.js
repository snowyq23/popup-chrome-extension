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
  // Get raw
  const images = document.querySelectorAll("img:not(.bes-img):not(.bes-logo)");
  console.log(images);
  const tempArr = Array.from(images).map((image) => ({
   src: image.src,
   naturalHeight: image.naturalHeight,
   naturalWidth: image.naturalWidth,
  }));
  const rawArr = [...state.raw].concat(tempArr);

  // Remove duplicate and null size
  const uniqueLink = [];
  const uniqueArr = rawArr.filter((el) => {
   const isDuplicate = uniqueLink.includes(el.src);

   if (
    !isDuplicate &&
    el.naturalHeight >= state.minHeight &&
    el.naturalWidth >= state.minWidth
   ) {
    uniqueLink.push(el.src);
    return true;
   }
   return false;
  });

  // Do commit
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
