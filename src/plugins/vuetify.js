/* eslint-disable prettier/prettier */
// Styles
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";

export default createVuetify({
 icons: {
  defaultSet: "md",
  aliases,
  sets: {
   md,
  },
 },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
