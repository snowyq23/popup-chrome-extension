/* eslint-disable prettier/prettier */
// initial state
const state = {
 authToken: "",
 disableSubmit: true,
};

const mutations = {
 setToken(state, text) {
  state.authToken = text;
  state.disableSubmit = false;
 },
};

export default {
 namespaced: true,
 state,
 mutations,
};
