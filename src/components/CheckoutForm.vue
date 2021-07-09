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

<script setup>
import { reactive, defineEmits } from "vue";
import BillingAddress from "./form/BillingAddress.vue";
import PaymentForm from "./form/PaymentForm.vue";

const emit = defineEmits(["submitted"]);

const form = reactive({});

const formData = (data) => {
  Object.assign(form, { ...data });
};

const checkout = () => {
  if (
    Object.keys(form).length &&
    Object.keys(form["billing_address"]).length > 5 &&
    Object.keys(form["payment_info"]).length > 4
  ) {
    emit("submitted", form);
    return;
  }

  alert("Please complete the form");
};
</script>
