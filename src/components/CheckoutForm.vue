<template>
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">
        <div class="row">
          <billing-address />
          <payment-form />
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr" /> Shipping
          address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn" />
      </form>
    </div>
  </div>
</template>

<script>
import BillingAddress from "./form/BillingAddress.vue";
import PaymentForm from "./form/PaymentForm.vue";
export default {
  components: { BillingAddress, PaymentForm },
};
</script>
