/* eslint-disable prettier/prettier */
import API from "@/api";

// default value
const defaultMin = 1;
const defaultMax = 100000;

// initial state
const state = {
 panel: [],
 raw: [],
 hidden: [],
 minWidth: defaultMin,
 maxWidth: defaultMax,
 minHeight: defaultMin,
 maxHeight: defaultMax,
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

  // Remove Duplicate & Null Size & Hidden Images (for Total)
  const uniqueLink = [];
  const uniqueArr = rawArr.filter((el) => {
   const isDuplicate = uniqueLink.includes(el.src);
   const isHidden = state.hidden.includes(el.src);

   if (!isDuplicate && !isHidden) {
    uniqueLink.push(el.src);
    return true;
   }
   return false;
  });

  // Filter Image (for Result)
  const filterArr = uniqueArr.filter((el) => {
   const inFilterRange =
    el.naturalWidth > state.minWidth &&
    el.naturalWidth < state.maxWidth &&
    el.naturalHeight > state.minHeight &&
    el.naturalHeight < state.maxHeight;

   if (inFilterRange) {
    return true;
   }
   return false;
  });

  // Do commit
  setTimeout(() => {
   commit("setRaw", uniqueArr);
   commit("setPanel", filterArr);
  }, 1000);
 },

 filterImages({ commit, state }) {
  const filtered = state.raw.filter(
   (image) =>
    image.naturalWidth > state.minWidth &&
    image.naturalWidth < state.maxWidth &&
    image.naturalHeight > state.minHeight &&
    image.naturalHeight < state.maxHeight
  );
  commit("setPanel", filtered);
 },

 deleteMultiple({ commit, state }) {
  const result = state.panel.filter((el) => {
   if (el.isSelected === false) {
    return true;
   } else {
    state.hidden.push(el.src);
   }
   return false;
  });
  commit("setPanel", result);
  commit("setRaw", result);
 },

 resetAll({ commit }) {
  // Reset authentication
  commit("auth/setToken", "", { root: true });

  // Reset default
  commit("setPanel", []);
  commit("setRaw", []);
  commit("setHidden", []);

  // Reset filter
  commit("setMinWidth", defaultMin);
  commit("setMaxWidth", defaultMax);
  commit("setMinHeight", defaultMin);
  commit("setMaxHeight", defaultMax);
 },

 uploadImages({ rootState }) {
  const selected = [];
  state.panel.forEach((el) => {
   if (el.isSelected) selected.push(el.src);
  });
  if (selected.length === 0) {
   alert("Please select at least one image before submitting.");
  } else {
   //    try {
   const token = rootState.auth.authToken;
   const uploaded = { token: token, urls: selected };
   console.log(uploaded);
   API.Files.uploadImages(uploaded);
   alert("Uploaded");
   //    } catch (err) {
   //     console.log("err", err);
   //     alert("Something went wrong. Please try again.");
   //    }
  }
 },
};

// mutations
const mutations = {
 // Default
 setPanel(state, images) {
  state.panel = images;
 },
 setRaw(state, images) {
  state.raw = images;
 },
 setHidden(state, images) {
  state.hidden = images;
 },
 hideImage(state, link) {
  state.hidden.push(link);
 },
 selectAll(state, val) {
  const items = document.querySelectorAll(".bes-checkbox");
  for (let item of items) {
   item.checked = val;
  }
  state.panel.forEach((image) => (image.isSelected = val));
 },

 // // Filter
 setMinWidth(state, val) {
  state.minWidth = val;
 },
 setMaxWidth(state, val) {
  state.maxWidth = val;
 },
 setMinHeight(state, val) {
  state.minHeight = val;
 },
 setMaxHeight(state, val) {
  state.maxHeight = val;
 },
};

export default {
 namespaced: true,
 state,
 getters,
 actions,
 mutations,
};
