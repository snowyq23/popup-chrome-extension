/* Create temp DOM to mount extension */
const para = document.createElement("div");
para.id = "bes-extension";
const target = document.querySelector(".items-center");
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
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faAngellist, fa500px } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faGripLines, faAngellist, fa500px);

/* In-app setting */
const inApp = createApp(InApp);

inApp.use(store).use(vuetify);
inApp.component("font-awesome-icon", FontAwesomeIcon);

inApp.mount("#bes-extension");
