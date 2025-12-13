<template>
  <CustomHeader :is-gradient="true" :color="'black'">{{ header }}</CustomHeader>
  <div class="podcasts-container">
    <PodcastCard
      v-for="podcast in props.podcasts"
      :podcast="podcast"
      :key="podcast._id"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import CustomHeader from '../common/CustomHeader.vue'
import PodcastCard from '../podcast/PodcastCard.vue'

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  podcasts: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.custom-header-container {
  margin-top: 2em !important;
  margin-bottom: 2em !important;
}

.podcasts-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 1216px) {
  .custom-header-container {
    width: 100vw;
    display: none;
  }
  .podcasts-container {
    width: 100vw;
    grid-template-columns: 1fr;
    display: none;
  }
}
</style>
