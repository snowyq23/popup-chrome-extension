/* eslint-disable prettier/prettier */
// initial state
const state = {
 authToken: "",
 disableSubmit: true,
};

const mutations = {
 setToken(state, text) {
  state.authToken = text;
  state.disableSubmit = text !== "" ? false : true;
 },
};

export default {
 namespaced: true,
 state,
 mutations,
};
