/* eslint-disable prettier/prettier */
/* Create temp DOM to mount extension button */
const para = document.createElement("div");
para.id = "bes-extension";
const target = document.querySelector("body");
target.appendChild(para);

/* VUE section */
import { createApp } from "vue";
import InApp from "../view/ContentView.vue";
import store from "../store";
import vuetify from "../plugins/vuetify";

/* Font loader */
// import { loadFonts } from "../plugins/webfontloader";
// loadFonts();

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
 faGripLines,
 faSolarPanel,
 faMagnifyingGlass,
 faTrashCan,
 faCircleMinus,
 faPaperPlane,
 faArrowsRotate,
 faKey,
 faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { fa500px } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
 faGripLines,
 faSolarPanel,
 faMagnifyingGlass,
 faTrashCan,
 faCircleMinus,
 faPaperPlane,
 faArrowsRotate,
 faKey,
 faXmark,
 fa500px
);

/* In-app setting */
const inApp = createApp(InApp);

inApp.use(store).use(vuetify);
inApp.component("font-awesome-icon", FontAwesomeIcon);

inApp.mount("#bes-extension");
