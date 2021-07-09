<template>
  <h2>Responsive Checkout Form</h2>
  <div class="row">
    <checkout-form />
    <cart />
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import CheckoutForm from "./components/CheckoutForm.vue";
export default {
  name: "App",
  components: {
    Cart,
    CheckoutForm,
  },
};
</script>
