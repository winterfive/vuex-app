import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.stor({
  state: {
    products: [
      { name: "Banana", price: 20 },
      { name: "Tomatoes", price: 30 },
      { name: "Cherries", price: 15 },
      { name: "Corn", price: 25 }
    ]
  }
});
