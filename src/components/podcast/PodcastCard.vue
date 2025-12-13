<template>
  <div class="podcast-card-container grow">
    <div class="img-container ar-160-211">
      <img :src="podcast.img" alt="" />
    </div>
    <div class="text-container">
      <h3>{{ podcast.presentor }}</h3>
      <h4>{{ podcast.title }}</h4>
      <p>{{ podcast.content }}</p>
    </div>
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

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.podcast-card-container {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
  background-color: $white-background;
  padding: 10px;
  text-align: start;

  .img-container {
    max-width: 160px;
    width: auto;
    img {
      width: 100%;
    }
  }
}
</style>
