import { createApp } from "vue";
// import vuex
import { createStore } from "vuex";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import router from "./router";

import "./assets/base.css";

// code for Vuex
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
  },
});

const app = createApp(App);

// useVuex
app.use(store);
app.use(router);
app.use(bootstrap);
app.mount("#app");
