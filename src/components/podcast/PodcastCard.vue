<template>
  <div class="podcast-card-container">
    <span>{{ podcast.title }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  podcast: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss"></style>
