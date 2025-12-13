<template>
  <div class="vod-container full-width">
    <div class="content-container">
      <CustomHeader :isGradient="true">{{ vodHeader }}</CustomHeader>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import CustomHeader from '../common/CustomHeader.vue'

const props = defineProps({
  vodHeader: {
    type: String,
    required: true,
  },
  videos: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.vod-container {
  background-color: $vod-bg-color;
  height: 400px;

  .content-container {
    margin: 0 auto;
    max-width: $max-width-screen;
  }
}
</style>
