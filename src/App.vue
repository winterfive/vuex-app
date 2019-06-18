<template>
  <v-app>
    <div id="app">
      <product-list-one />
      <product-list-two />
    </div>
  </v-app>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

export default {
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  },
  name: "app"
};
</script>

<style lang="scss">
body {
  font-family: sans-serif;
  color: darkblue;
}
</style>
