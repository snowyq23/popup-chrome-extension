/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import modal from "./modules/modal";
import images from "./modules/images";
import auth from "./modules/auth";

export default createStore({
 state: {},
 getters: {},
 mutations: {},
 actions: {},
 modules: { modal, images, auth },
});
