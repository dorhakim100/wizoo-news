<template>
  <div class="home-dashboard-container">
    <div class="main-container">
      <div class="event-container event-1 pointer">
        <img :src="event1.img" alt="" />
      </div>
      <div class="articles-container">
        <ArticleCard
          v-for="(article, index) in props.articles"
          :article="article"
          :key="`${article.type}-${index}`"
          :isMain="index === 0"
        />
      </div>

      <div class="event-container event-2 pointer">
        <img :src="event2.img" alt="" />
      </div>
    </div>
    <Divider type="vertical" />
    <div class="side-articles-container">
      <h4>הכתבות הנצפות ביותר</h4>
      <template
        v-for="(article, index) in props.mostViewed"
        :key="`${article.type}-${index}`"
      >
        <ArticleCard
          v-if="index !== props.mostViewed.length - 1"
          :article="article"
          :isMain="false"
        />
      </template>
      <img :src="vod.img" class="vod-img pointer" alt="vod" />
      <ArticleCard
        :article="props.mostViewed[props.mostViewed.length - 1]"
        :isMain="false"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import { Divider } from 'ant-design-vue'

import ArticleCard from './article/ArticleCard.vue'

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
</script>

<style scoped lang="scss">
@import '../styles/setup/variables';

.home-dashboard-container {
  display: grid;
  grid-template-columns: 1fr 3px 292px;
  gap: 15px;

  .main-container {
    display: grid;
    gap: 10px;
    .event-container {
      // height: 213.5px;
      background-color: $bg-secondary;
      padding: 7px;

      img {
        // height: 213.5px;
        width: 100%;
      }
    }

    .articles-container {
      grid-row: 2/3;
      grid-column: 1/2;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, auto);
      gap: 15px;
      align-items: start;

      .article-card.main {
        grid-column: 1/-1;
        justify-self: center;
      }
    }
  }

  .ant-divider {
    height: 100%;
    background-color: $primary;
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: stretch;
    justify-self: center;
    opacity: 42%;
  }

  .side-articles-container {
    display: grid;
    // grid-template-rows: ;

    h4 {
      font-size: 1.5em;
      margin-bottom: 0.5em;
      text-align: start;
    }

    .vod-img {
      max-width: 100%;
      background-color: $bg-secondary;
      padding: 7px;
    }
  }
}
</style>
