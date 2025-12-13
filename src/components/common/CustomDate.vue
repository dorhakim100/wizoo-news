<template>
  <div class="custom-date-container">
    <slot />
    <Divider type="vertical" :style="{ backgroundColor: dividerColor || '' }" />
    <span>{{ date }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { Divider } from 'ant-design-vue'

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  dividerColor: {
    type: String,
    required: false,
  },
})
</script>

<style scoped lang="scss">
.custom-date-container {
  @import '../../styles/setup/_variables';

  display: flex;
  align-items: center;
  opacity: 58%;
  font-size: 14px;

  .ant-divider {
    margin-top: 3px;
    background-color: $text-primary;
  }
}
</style>
