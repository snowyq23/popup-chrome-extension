/* eslint-disable prettier/prettier */
// const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

// const colorPicker = () => {
//  const randomIndex = Math.floor(Math.random() * colors.length);
//  return colors[randomIndex];
// };

// document.body.style.backgroundColor = colorPicker();

import { createApp } from "vue";
import InApp from "../view/content-view.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faAlicon } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faAlicon);

createApp(InApp)
 .component("font-awesome-icon", FontAwesomeIcon)
 .mount(".crayons-header__container .items-center");
