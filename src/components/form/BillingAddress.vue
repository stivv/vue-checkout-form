<template>
  <div class="col-50">
    <h3>Billing Address</h3>
    <form-sections :form-inputs="formInputs" />
  </div>
</template>

<script>
import FormSections from "./FormSections.vue";
export default {
  data() {
    return {
      formInputs: [
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
      ],
    };
  },
  components: { FormSections },
};
</script>
