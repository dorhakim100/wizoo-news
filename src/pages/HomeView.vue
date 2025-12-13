<template>
  <div class="page-container">
    <HomeDashboard
      :articles="dashboardArticles"
      :mostViewed="mostViewed"
      :event1="event1"
      :event2="event2"
      :vod="vod"
    />

    <div
      v-for="(object, index) in types"
      :key="object.type"
      class="articles-event-container"
    >
      <ArticlesType
        :type="object.type"
        :articles="articles.filter((article) => article.type === object.type)"
      />
      <img :src="event1.img" alt="event" v-if="(index - 1) % 2 === 0" />
    </div>
    <VodDashboard :vodHeader="vodHeader" :videos="videos" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { getArrayOfNumbers, getRandomInt } from '../services/utils.service'
import { types } from '../config/article-types'
import dashboardJson from '../assets/jsons/home-dashboard/home-dashboard.json'
import vodDashboardJson from '../assets/jsons/vod-dashboard/vod-dashboard.json'

import HomeDashboard from '../components/HomeDashboard.vue'
import ArticlesType from '../components/article/ArticlesType.vue'
import VodDashboard from '../components/vod/VodDashboard.vue'

const { articles, event1, event2, vod } = dashboardJson
const { vodHeader, videos } = vodDashboardJson

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
