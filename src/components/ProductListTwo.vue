<template>
  <div class="product-list-two">
    <h2>Product List Two</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#product-list-two {
  background: red;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

.product-list-two ul {
  padding: 0;
}

.product-list-two li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.price {
  font-weight: bold;
  color: black;
}
</style>
