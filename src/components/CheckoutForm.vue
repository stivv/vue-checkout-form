<template>
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">
        <div class="row">
          <billing-address @formData="formData" />
          <payment-form @formData="formData" />
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr" /> Shipping
          address same as billing
        </label>
        <input
          type="button"
          value="Continue to checkout"
          class="btn"
          @click.prevent="checkout"
        />
      </form>
    </div>
  </div>
</template>

<script>
import BillingAddress from "./form/BillingAddress.vue";
import PaymentForm from "./form/PaymentForm.vue";
export default {
  emits: ["submitted"],
  data() {
    return {
      form: {},
    };
  },
  components: { BillingAddress, PaymentForm },
  methods: {
    formData(data) {
      Object.assign(this.form, data);
    },
    checkout() {
      if (Object.keys(this.form).length) this.$emit("submitted", this.form);
      else alert("Please complete the form");
    },
  },
};
</script>
