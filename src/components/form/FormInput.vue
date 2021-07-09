<template>
  <label :for="name">
    <slot name="labelIcon"></slot>
    {{ label || name }}
  </label>
  <input
    :type="$attrs.type"
    :class="$attrs.class"
    :id="name"
    :name="name"
    placeholder=""
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

defineEmits(["update:modelValue"]);

defineProps({
  name: String,
  label: String,
  placeholder: String,
});
</script>
