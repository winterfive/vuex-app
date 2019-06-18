import App from "./App.vue";
import { store } from "./store";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
new Vue({
  el: "#app",
  store: store,
  render: h => h(App)
});
