import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import VuexPersistPlugin from "@/plugins/vuex-persists";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [VuexPersistPlugin],
});

