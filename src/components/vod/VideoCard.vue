<template>
  <div :class="`video-card-container ${isMain ? 'main' : ''}`">
    <div class="thumbnail-container">
      <img :src="video.thumbnail" alt="" class="ar-278-160" />
      <CustomPlay class="center-absolute" />
    </div>
    <h3>{{ video.title }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import CustomPlay from '../common/CustomPlay.vue'

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
  isMain: {
    type: Boolean,
    required: false,
  },
})

console.log(props.video)
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.video-card-container {
  background-color: $video-card-bg;
  padding: 5px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &.main {
    grid-template-columns: 1fr;
    .thumbnail-container {
      grid-column: 1/-1;
      img {
        max-width: none;
      }

      .icon-container {
        font-size: 1.6em;
      }
    }
  }

  .thumbnail-container {
    position: relative;
    height: fit-content;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: $thumbnail-shadow;
    }
    img {
      width: 100%;
    }
  }
}
</style>
