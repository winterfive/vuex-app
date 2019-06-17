<template>
  <div class="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price"> ${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list-two {
  background: #7fd3e2;
  margin-bottom: 30px;
  padding: 10px 20px;
}

.product-list-two ul {
  padding: 0;
}

.product-list-two li {
  display: block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.4);
}

.price {
  font-weight: bold;
  color: black;
}
</style>
