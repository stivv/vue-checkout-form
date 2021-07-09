<template>
  <div class="col-25">
    <div class="container">
      <button @click="addProduct">Add product</button>
      <h4>
        Cart
        <span class="price" style="color: black">
          <i class="fa fa-shopping-cart"></i>
          <b>{{ products.count }}</b>
        </span>
      </h4>
      <p v-for="(product, idx) in products" :key="idx">
        <a href="#">{{ product.name }}</a>
        <span class="price">
          ${{ product.price }}
          <button style="margin-left: 5px" @click="removeProduct(idx)">
            X
          </button>
        </span>
      </p>
      <hr />
      <p>
        Total
        <span class="price" style="color: black">
          <b>${{ totalPrice }}</b>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "cart/getProducts",
      totalPrice: "cart/getProductsTotal",
    }),
  },
  methods: {
    ...mapActions({
      addProduct: "cart/addProduct",
      removeProduct: "cart/removeProduct",
    }),
  },
};
</script>
