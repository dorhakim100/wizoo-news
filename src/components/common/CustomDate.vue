<template>
  <div class="writer-date-container">
    <slot />
    <Divider type="vertical" />
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
})
</script>

<style scoped lang="scss">
.writer-date-container {
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
