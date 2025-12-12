<template>
  <label :class="`custom-label ${getColorNameFromType(type)}`">
    <slot />
  </label>
</template>

<script setup>
import { defineProps } from 'vue'
import { getColorNameFromType } from '../../services/utils.service'

const props = defineProps({
  type: {
    type: String,
    required: false,
  },
})

console.log(props.type)
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.custom-label {
  padding: 5px 20px;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, -14% 100%);

  &.green {
    background-color: $color-green;
  }
  &.gold {
    background-color: $color-gold;
  }
  &.blue {
    background-color: $color-blue;
  }
  &.bottle-green {
    background-color: $color-bottle-green;
    color: $text-white;
  }
  &.orange {
    background-color: $color-orange;
    color: $text-white;
  }
  &.scarlet {
    background-color: $color-scarlet;
    color: $text-white;
  }
  &.pink {
    background-color: $color-pink;
    color: $text-white;
  }
  &.gray {
    background-color: gray;
  }
}
</style>
