<template>
  <div :class="`video-card-container ${isMain ? 'main' : ''} pointer grow`">
    <div class="img-container">
      <img :src="video.thumbnail" alt="" class="ar-278-160" />
      <CustomPlay class="center-absolute" />
      <CustomLabel :is-gradient="true" v-if="label">{{ label }}</CustomLabel>
    </div>
    <div class="text-container">
      <h3 class="wrap-ellipsis">{{ video.title }}</h3>
      <p class="wrap-ellipsis" v-if="isMain">{{ video.content }}</p>
      <CustomDate :date="video.date" :divider-color="'white'">{{
        label
      }}</CustomDate>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import CustomPlay from '../common/CustomPlay.vue'
import CustomDate from '../common/CustomDate.vue'
import CustomLabel from '../common/CustomLabel.vue'

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
  isMain: {
    type: Boolean,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
})

console.log(props.video)
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.video-card-container {
  background-color: $video-card-bg;
  padding: 8px;
  text-align: start;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1em;

  &.main {
    grid-template-columns: 1fr;
    .img-container {
      grid-column: 1/-1;
      img {
        max-width: none;
      }

      .icon-container {
        font-size: 1.6em;
      }
    }

    .custom-date-container {
      grid-row: 1/2;
    }

    h3 {
      font-size: 32px;
    }
    .custom-date-container {
      font-size: 18px;
    }
  }

  .img-container {
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

    .custom-label {
      position: absolute;
      bottom: 6px;
      z-index: 3;
      padding-right: 3.5em;
      padding-left: 3.5em;
    }
  }
  .text-container {
    margin-bottom: 6px;
    align-self: end;
    display: grid;
    gap: 1em;
  }

  h3,
  p {
    font-size: 18px;
  }
}
</style>
