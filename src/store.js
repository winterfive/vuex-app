import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
  methods: {
    reducePrice() {
      this.$store.state.products.forEach(product => {
        product.price -= 1;
      });
    }
  },
  mutations: {},
  actions: {}
});
