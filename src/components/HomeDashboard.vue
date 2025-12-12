<template>
  <div class="home-dashboard-container">
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
    <aside></aside>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

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
  grid-template-columns: auto 1fr;

  .articles-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    .article-card:first-of-type {
      grid-column: 1/-1;
      //   background-color: red;
      img {
        // width: 300px;
      }
    }
  }
}
</style>
