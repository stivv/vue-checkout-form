<template>
  <template v-for="input in formInputs" :key="input.name">
    <form-input
      v-if="!input.row"
      :type="input.type || 'text'"
      :name="input.name"
      :label="input.label"
      :class="input.class"
      v-model="form[input.name]"
    >
      <template #labelIcon>
        <i class="fa" :class="input.labelIcon"></i>
      </template>
    </form-input>
    <div v-else class="row">
      <div v-for="row in input.row" :key="row.name" :class="row.class">
        <form-input
          :type="row.type || 'text'"
          :name="row.name"
          :label="row.label"
          v-model="form[row.name]"
        >
          <template #labelIcon>
            <i :class="row.labelIcon"></i>
          </template>
        </form-input>
      </div>
    </div>
  </template>
</template>

<script setup>
import FormInput from "./FormInput.vue";
import { defineEmits, defineProps, reactive, watch } from "vue";

const emit = defineEmits(["formData"]);

defineProps(["formInputs"]);

const form = reactive({});

watch(form, (val) => emit("formData", val), { deep: true });
</script>
