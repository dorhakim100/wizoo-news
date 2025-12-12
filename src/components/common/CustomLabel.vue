<template>
  <label :class="`custom-label ${getColorNameFromType(type)} pointer`">
    <slot />
    <LeftOutlined v-if="isArrowIcon" class="arrow-icon" />
  </label>
</template>

<script setup>
import { defineProps } from 'vue'
import { getColorNameFromType } from '../../services/utils.service'

import { LeftOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  type: {
    type: String,
    required: false,
  },
  isArrowIcon: {
    type: Boolean,
    required: false,
  },
})
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.custom-label {
  padding: 5px 20px;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, -14% 100%);
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 12px;

  .arrow-icon {
    margin-top: 3px;
    font-size: 10px;
  }

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
