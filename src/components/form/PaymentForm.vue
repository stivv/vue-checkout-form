<template>
  <div class="col-50">
    <h3>Payment</h3>
    <label for="fname">Accepted Cards</label>
    <div class="icon-container">
      <i class="fa fa-cc-visa" style="color: navy; margin-right: 3px"></i>
      <i class="fa fa-cc-amex" style="color: blue; margin-right: 3px"></i>
      <i class="fa fa-cc-mastercard" style="color: red; margin-right: 3px"></i>
      <i class="fa fa-cc-discover" style="color: orange"></i>
    </div>
    <form-sections
      :form-inputs="formInputs"
      @formData="$emit('formData', { payment_info: { ...$event } })"
    />
  </div>
</template>

<script setup>
import FormSections from "./FormSections.vue";
import { defineEmits } from "vue";

defineEmits(["formData"]);

const formInputs = [
  { label: "Name on Card", name: "cardname" },
  { label: "Credit card number", name: "cardnumber" },
  { label: "Exp Month", name: "expmonth" },
  {
    row: [
      { label: "Exp Year", name: "expyear", class: "col-50" },
      { label: "CVV", name: "cvv", class: "col-50" },
    ],
  },
];
</script>
