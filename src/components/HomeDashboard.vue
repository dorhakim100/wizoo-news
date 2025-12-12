<template>
  <div class="home-dashboard-container">
    <div class="event1-container"></div>
    <div class="articles-container"></div>

    <div class="event1-container"></div>
    <aside></aside>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  articles: {
    type: Object,
    required: false,
  },
  mostViewed: {
    type: Object,
    required: false,
  },
  event1: {
    type: Object,
    required: false,
  },
  event2: {
    type: Object,
    required: false,
  },
  vod: {
    type: Object,
    required: false,
  },
})

console.log(props.articles)
console.log(props.mostViewed)
</script>

<style scoped lang="scss">
.home-dashboard-container {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
