<template>
  <div class="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price"> ${{ product.price }}</span>
      </li>
    </ul>
    <div>
      <v-btn v-on:click="reducePrice(2)" class="deep-purple darken-3" dark
        >Reduce Price by $2</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["saleProducts"])
  },
  methods: {
    ...mapActions(["reducePrice"])
  }
};
</script>

<style lang="scss" scoped>
li {
  width: 160px;
}
.product-list-one {
  background: #7f81e2;
  margin-bottom: 30px;
  padding: 10px 20px;
}

.product-list-one ul {
  padding: 0;
}

.product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.4);
}

.price {
  font-weight: bold;
  color: black;
}

.v-btn {
  margin-top: 18px;
}
</style>
