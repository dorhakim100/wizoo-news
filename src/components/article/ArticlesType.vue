<template>
  <div class="articles-type-container">
    <CustomHeader :color="articleService.getColorNameFromType(type)">{{
      articleService.getHebrewType(type)
    }}</CustomHeader>
    <div class="articles-container">
      <ArticleCard
        v-for="article in minArray"
        :key="`${article.type}-${makeId()}`"
        :is-main="false"
        :article="article"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

import { articleService } from '../../services/article/article.service'

import CustomHeader from '../common/CustomHeader.vue'
import ArticleCard from './ArticleCard.vue'
import {
  getArrayOfNumbers,
  getRandomInt,
  makeId,
} from '../../services/utils.service'

const MINMUM_VALUE = 4

const props = defineProps({
  articles: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const minArray = computed(() => {
  return props.articles.length >= MINMUM_VALUE
    ? props.articles
    : getArrayOfNumbers(0, 3).map(
        () => props.articles[getRandomInt(0, props.articles.length - 1)]
      )
})
</script>

<style scoped lang="scss">
.articles-type-container {
  margin: 2em 0;
  display: grid;

  .articles-container {
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }

  @media (max-width: 1216px) {
    max-width: 100vw;
    margin: 0 auto;

    .articles-container {
      display: grid;
    }
  }
}
</style>
