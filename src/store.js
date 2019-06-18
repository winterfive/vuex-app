import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: "Banana", price: 20 },
      { name: "Tomatoes", price: 30 },
      { name: "Cherries", price: 15 },
      { name: "Corn", price: 25 }
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: Math.round(product.price / 2)
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, amount) => {
      state.products.forEach(product => {
        product.price -= amount;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit("reducePrice", payload);
      }, 2000);
    }
  }
});
