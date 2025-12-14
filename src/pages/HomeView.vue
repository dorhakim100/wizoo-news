<template>
  <div class="page-container">
    <HomeDashboard
      :articles="dashboardArticles"
      :mostViewed="mostViewed"
      :event1="event1"
      :event2="event2"
      :vod="vod"
    />

    <div class="types-container">
      <div
        v-for="(object, index) in types"
        :key="object.type"
        class="articles-event-container"
      >
        <ArticlesType
          :type="object.type"
          :articles="articles.filter((article) => article.type === object.type)"
        />
        <img
          :src="event1.img"
          alt="event"
          class="event-img"
          v-if="(index - 1) % 2 === 0"
        />
      </div>
    </div>
    <VodDashboard :vodHeader="vodHeader" :videos="videos" />
    <PodcastDashboard :header="podcastHeader" :podcasts="podcasts" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import { getArrayOfNumbers, getRandomInt } from '../services/utils.service'
import { types } from '../config/article-types'
import dashboardJson from '../assets/jsons/home-dashboard/home-dashboard.json'
import vodDashboardJson from '../assets/jsons/vod-dashboard/vod-dashboard.json'
import podcastDashboardJson from '../assets/jsons/podcast-dashboard/podcast-dashboard.json'

import HomeDashboard from '../components/HomeDashboard.vue'
import ArticlesType from '../components/article/ArticlesType.vue'
import VodDashboard from '../components/vod/VodDashboard.vue'
import PodcastDashboard from '../components/podcast/PodcastDashboasrd.vue'

const articles = ref(dashboardJson.articles)
const event1 = ref(dashboardJson.event1)
const event2 = ref(dashboardJson.event2)
const vod = ref(dashboardJson.vod)

const vodHeader = ref(vodDashboardJson.vodHeader)
const videos = ref(vodDashboardJson.videos)

const podcastHeader = ref(podcastDashboardJson.podcastHeader)
const podcasts = ref(podcastDashboardJson.podcasts)

const dashboardArticles = computed(() => {
  return getArrayOfNumbers(0, 6).map(() => {
    return articles.value[getRandomInt(0, articles.value.length - 1)]
  })
})

const mostViewed = computed(() =>
  getArrayOfNumbers(1, 3).map(() => {
    return articles.value[getRandomInt(0, articles.value.length - 1)]
  })
)
</script>

<style scoped lang="scss">
.page-container {
  & > div {
    margin-top: 5em;
    margin-bottom: 5em;
  }
  @media (max-width: 1216px) {
    .event-img {
      display: none;
    }
  }
}
</style>
