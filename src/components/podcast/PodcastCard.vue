<template>
  <div class="podcast-card-container grow pointer">
    <div class="img-container ar-160-211">
      <img :src="podcast.img" alt="" />
    </div>
    <div class="text-container">
      <div class="heraders-container">
        <h3>{{ podcast.presentor }}</h3>
        <h4>{{ podcast.title }}</h4>
      </div>
      <p>{{ podcast.content }}</p>
      <CustomDate :date="podcast.date" :after-value="SYSTEM_STR">{{
        POSDCASTS_STR
      }}</CustomDate>
    </div>
    <div class="icons-container">
      <PlayArrow />
      <HeadPhones />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CustomDate from '../common/CustomDate.vue'

import PlayArrow from '../../assets/icons/play.svg'
import HeadPhones from '../../assets/icons/headphones.svg'

const POSDCASTS_STR = 'פודקסטים'
const SYSTEM_STR = 'מערכת מרכז הנדל״ן'

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
  grid-template-columns: auto 1fr 60px;
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

  .text-container {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1em;

    p {
      //   align-self: start;
      line-height: 150%;
    }
  }

  h3 {
    font-size: 2em;
    margin-bottom: 5px;
  }

  h4,
  p {
    font-size: 18px;
  }

  .icons-container {
    align-self: start;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
