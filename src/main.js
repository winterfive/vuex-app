import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

new Vue({
  el: "#app",
  store: store,
  render: h => h(App)
});

Vue.use(Vuetify);
