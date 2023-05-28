import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import ComponentModule from "@/components/module";

Vue.config.productionTip = false;

ComponentModule();

import "@/assets/styles/scss/index.scss";
import "@/assets/styles/css/index.css";

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
