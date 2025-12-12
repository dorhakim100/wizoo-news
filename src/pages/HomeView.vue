<template>
  <div class="page-container">
    <HomeDashboard
      :articles="dashboardArticles"
      :mostViewed="mostViewed"
      :event1="event1"
      :event2="event2"
      :vod="vod"
    />
    <ArticlesType
      v-for="object in types"
      :type="object.type"
      :key="object.type"
      :articles="articles.filter((article) => article.type === object.type)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { getArrayOfNumbers, getRandomInt } from '../services/utils.service'
import dashboardJson from '../assets/jsons/home-dashboard/home-dashboard.json'

import HomeDashboard from '../components/HomeDashboard.vue'
import ArticlesType from '../components/article/ArticlesType.vue'
import { types } from '../config/article-types'

const { articles, event1, event2, vod } = dashboardJson

const dashboardArticles = computed(() => {
  return getArrayOfNumbers(0, 6).map(() => {
    return articles[getRandomInt(0, articles.length - 1)]
  })
})

const mostViewed = computed(() =>
  getArrayOfNumbers(1, 3).map(() => {
    return articles[getRandomInt(0, articles.length - 1)]
  })
)
</script>

<style scoped lang="scss"></style>
