<template>
  <article :class="`article-card ${isMain ? 'main' : ''} pointer grow`">
    <div class="img-container">
      <img :src="article.img" :alt="article.type" class="ar-278-160" />
      <CustomLabel :color="articleService.getColorNameFromType(article.type)">
        {{ articleService.getHebrewType(article.type) }}
      </CustomLabel>
    </div>
    <div class="title-container">
      <h3 class="title wrap-ellipsis">
        {{ article.title }}
      </h3>
      <p class="wrap-ellipsis" v-if="isMain">{{ article.content }}</p>
    </div>

    <CustomDate :date="article.date">
      {{ article.writer }}
    </CustomDate>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

import { articleService } from '../../services/article/article.service'

import CustomLabel from '../common/CustomLabel.vue'
import CustomDate from '../common/CustomDate.vue'

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  isMain: {
    type: Boolean,
    required: true,
  },
})
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.article-card {
  text-align: start;
  background-color: $bg-secondary;
  padding: 7px;

  display: grid;
  grid-template-rows: auto 1fr auto;

  .img-container {
    position: relative;
    img {
      object-fit: cover;
      // width: 100%;
      height: 100%;
    }
    .custom-label {
      position: absolute;
      bottom: 0;
      inset-inline-start: 0;
    }
  }

  h3 {
    margin-bottom: 69px;
  }

  &.main {
    display: grid;
    grid-template-columns: 60% 40%;

    gap: 10px;
    padding: 10px;

    .img-container {
      grid-row: 1/-1;
      .custom-label {
        padding: 10px 30px;
      }
    }

    .custom-date-container {
      grid-row: 1/2;
    }

    h3 {
      font-size: 2em;
    }

    p {
      line-height: 150%;
      font-size: 18px;
    }
  }
}
</style>
