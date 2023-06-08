import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueJSToggleButton from "./plugins/vue-js-pluggin-button";
import store from "./store";
import ComponentModule from "@/components/module";
import ApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

ComponentModule();
VueJSToggleButton();

import "@/assets/styles/scss/index.scss";
import "@/assets/styles/css/index.css";

Vue.component("apex-chart", ApexCharts);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
