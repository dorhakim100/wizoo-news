<template>
  <article :class="`article-card ${isMain ? 'main' : ''} pointer`">
    <div class="img-container">
      <img :src="article.img" :alt="article.type" />
      <CustomLabel :type="article.type">
        {{ articleService.getHebrewType(article.type) }}
      </CustomLabel>
    </div>
    <div class="title-container">
      <h3 class="title wrap-ellipsis">
        {{ article.title }}
      </h3>
      <p class="wrap-ellipsis" v-if="isMain">{{ article.content }}</p>
    </div>
    <div class="writer-date-container">
      <span>{{ article.writer }}</span>
      <Divider type="vertical" />
      <span>{{ article.date }}</span>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

import { articleService } from '../../services/article/article.service'

import CustomLabel from '../common/CustomLabel.vue'

import { Divider } from 'ant-design-vue'

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
console.log(props.article)
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.article-card {
  text-align: start;
  background-color: $bg-secondary;
  padding: 7px;

  display: grid;
  grid-template-rows: auto 1fr auto;

  height: 316px;

  &:not(.main) {
    max-width: 282px;
    .img-container {
      max-height: 160px;
    }
  }

  .img-container {
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .custom-label {
      position: absolute;
      bottom: 0;
      inset-inline-start: 0;
    }
  }

  .writer-date-container {
    display: flex;
    align-items: center;
    opacity: 58%;
    font-size: 14px;

    .ant-divider {
      margin-top: 3px;
      background-color: $text-primary;
    }
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

    .writer-date-container {
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
