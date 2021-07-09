<template>
  <div class="col-25">
    <div class="container">
      <button v-if="actions" @click="addProduct">Add product</button>
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
          <button
            v-if="actions"
            style="margin-left: 5px"
            @click="removeProduct(idx)"
          >
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

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  actionBtns: {
    type: Boolean,
    default: true,
  },
});

const products = computed(() => store.getters["cart/getProducts"]);
const totalPrice = computed(() => store.getters["cart/getProductsTotal"]);
const actions = computed(() => props.actionBtns);

const addProduct = () => store.dispatch("cart/addProduct");
const removeProduct = (idx) => store.dispatch("cart/removeProduct", idx);
</script>
