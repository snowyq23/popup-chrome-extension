/* eslint-disable prettier/prettier */
// initial state
const state = {
 isOpen: false,
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
 openModal(state) {
  state.isOpen = true;
 },
 closeModal(state) {
  state.isOpen = false;
 },
};

export default {
 namespaced: true,
 state,
 getters,
 actions,
 mutations,
};
