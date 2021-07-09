<template>
  <h2>Checkout Form</h2>
  <div class="row">
    <transition-group name="fade">
      <div class="col-75" v-if="Object.keys(submitted).length" key="submitted">
        <h3>
          <i class="fa fa-fw fa-check-circle-o"></i>
          Your order has been received. Thank you for shopping with us!
        </h3>
        <h4>Order# - 123asd</h4>
        <div class="row">
          <div class="col-50">
            <h5>Here's the details you provided:</h5>
            <ul class="container">
              <li
                v-for="(submit, key) in submitted"
                :key="key"
                style="margin-top: 20px"
              >
                <b>{{ key }}</b>
                <ul style="margin-top: 10px">
                  <li v-for="(s, k) in submit" :key="k">
                    <b>{{ k }} - </b>{{ s }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-50">
            <h5>Your Cart:</h5>
            <cart :action-btns="false" />
          </div>
        </div>
      </div>
      <template v-else>
        <checkout-form key="checkout" @submitted="complete" />
        <cart key="cart-trans" />
      </template>
    </transition-group>
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import CheckoutForm from "./components/CheckoutForm.vue";
export default {
  name: "App",
  data() {
    return {
      submitted: {},
    };
  },
  components: {
    Cart,
    CheckoutForm,
  },
  methods: {
    complete(data) {
      setTimeout(() => {
        this.submitted = data;
      }, 100);
    },
  },
};
</script>
