/* eslint-disable prettier/prettier */
// initial state
const state = {
 panel: [],
 raw: [],
 minWidth: 1,
 minHeight: 1,
 hidden: [],
};

// getters
const getters = {};

// actions
const actions = {
 getAllImages({ commit, state }) {
  // Get raw
  const images = document.querySelectorAll("img:not(.bes-img):not(.bes-logo)");
  const tempArr = Array.from(images).map((image) => ({
   src: image.src,
   naturalHeight: image.naturalHeight,
   naturalWidth: image.naturalWidth,
   isSelected: false,
  }));
  const rawArr = [...state.raw].concat(tempArr);

  // Remove duplicate and null size
  const uniqueLink = [];
  const uniqueArr = rawArr.filter((el) => {
   const isDuplicate = uniqueLink.includes(el.src);
   const isHidden = state.hidden.includes(el.src);

   if (
    !isDuplicate &&
    el.naturalHeight >= state.minHeight &&
    el.naturalWidth >= state.minWidth &&
    !isHidden
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

 removeSelected({ commit, state }) {
  const updatedPanel = state.panel.filter((el) => {
   if (el.isSelected === false) {
    return true;
   } else {
    state.hidden.push(el.src);
   }
   return false;
  });
  commit("setPanel", updatedPanel);
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
 setHidden(state, link) {
  state.hidden.push(link);
 },
 selectAll(state, val) {
  state.panel.forEach((image) => (image.isSelected = val));
 },
};

export default {
 namespaced: true,
 state,
 getters,
 actions,
 mutations,
};
