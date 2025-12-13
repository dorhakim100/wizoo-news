<template>
  <div class="vod-container full-width">
    <div class="content-container">
      <CustomHeader :isGradient="true" :color="'white'">{{
        vodHeader
      }}</CustomHeader>
      <div class="videos-container">
        <VideoCard
          v-for="(video, index) in props.videos"
          :key="video._id"
          :video="video"
          :isMain="index === 0"
          :label="vodHeader"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import CustomHeader from '../common/CustomHeader.vue'
import VideoCard from '../vod/VideoCard.vue'

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

  color: $text-white;

  .content-container {
    padding: 5em 12px 7em 12px;
    margin: 0 auto;
    max-width: $max-width-screen;

    .videos-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 15px;
      .video-card-container:first-child {
        grid-row: 1/-1;
      }
    }
  }
}
</style>
