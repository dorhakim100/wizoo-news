<template>
  <div class="custom-search-container">
    <input
      type="text"
      :value="props.searchValue"
      @input="emit('update:searchValue', $event.target.value)"
      placeholder="חיפוש"
    />
    <SearchIcon />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import SearchIcon from '../../assets/icons/search-icon.svg'

const props = defineProps({
  searchValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:searchValue'])
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.custom-search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid $secondary;
  border-radius: 25px;
  padding: 5px;

  input {
    padding: 4.5px;
    border: none;

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }

    &::placeholder {
      color: $secondary;
    }
  }
}
</style>
