<template>
  <div class="col-50">
    <h3>Billing Address</h3>
    <form-sections
      :form-inputs="formInputs"
      @formData="$emit('formData', { billing_address: { ...$event } })"
    />
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import FormSections from "./FormSections.vue";

defineEmits(["formData"]);

const formInputs = [
  { label: "Full Name", name: "firstname", labelIcon: "fa-user" },
  { label: "Email", name: "email", labelIcon: "fa-envelope" },
  { label: "Address", name: "address", labelIcon: "fa-address-card-o" },
  { label: "City", name: "city", labelIcon: "fa-institution" },
  {
    row: [
      { label: "State", name: "state", class: "col-50" },
      { label: "Zip", name: "zip", class: "col-50" },
    ],
  },
];
</script>
