<template>
  <div class="custom-date-container">
    <slot />
    <Divider type="vertical" :style="{ backgroundColor: dividerColor || '' }" />
    <span>{{ hebrewDate }}</span>
    <template v-if="afterValue">
      <Divider
        type="vertical"
        :style="{ backgroundColor: dividerColor || '' }"
      />
      <span>{{ afterValue }}</span>
    </template>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { Divider } from 'ant-design-vue'

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  afterValue: {
    type: String,
    required: false,
  },
  dividerColor: {
    type: String,
    required: false,
  },
})

const hebrewDate = computed(() => {
  const d = new Date(props.date)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  return `${day}.${month}`
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
