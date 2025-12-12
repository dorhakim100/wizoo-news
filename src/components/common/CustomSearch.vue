<template>
  <input
    type="text"
    :value="props.searchValue"
    @input="emit('update:searchValue', $event.target.value)"
  />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  searchValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:searchValue'])
</script>

<style scoped></style>
