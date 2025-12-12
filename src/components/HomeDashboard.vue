<template>
  <div class="home-dashboard-container">
    <div class="main-container">
      <div class="event1-container"></div>
      <div class="articles-container">
        <ArticleCard
          v-for="(article, index) in props.articles"
          :article="article"
          :key="`${article.type}-${index}`"
          :isMain="index === 0"
        />
      </div>

      <div class="event1-container"></div>
    </div>
    <Divider type="vertical" />
    <div class="side-articles-container">
      <ArticleCard
        v-for="(article, index) in props.mostViewed"
        :article="article"
        :key="`${article.type}-${index}`"
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

console.log(props.articles)
console.log(props.mostViewed)
</script>

<style scoped lang="scss">
.home-dashboard-container {
  display: grid;
  grid-template-columns: 1fr 3px auto;
  gap: 15px;

  .main-container {
    .articles-container {
      grid-row: 1/2;
      grid-column: 1/2;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 15px;
      align-items: start;

      .article-card:first-of-type {
        grid-column: 1/-1;
        //   background-color: red;
        img {
          // width: 300px;
        }
      }
    }
  }

  .ant-divider {
    // width: 5px;
    height: 100%;
    background-color: red;
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: stretch;
    justify-self: center;
  }

  .side-articles-container {
  }
}
</style>
