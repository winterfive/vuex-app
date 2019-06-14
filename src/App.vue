<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      products: [
        { name: 'Banana', price: 20},
        { name: 'Tomatoes', price: 30},
        { name: 'Cherries', price: 15},
        { name: 'Corn', price: 25},
      ]
    }
  }
}
</script>


<style lang="scss"></style>
