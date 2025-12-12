<template>
  <HomeDashboard
    :articles="articles"
    :mostViewed="mostViewed"
    :event1="event1"
    :event2="event2"
    :vod="vod"
  />
</template>

<script setup>
import { computed } from 'vue'

import HomeDashboard from '../components/HomeDashboard.vue'
import dashboardJson from '../assets/jsons/home-dashboard/home-dashboard.json'
import { getArrayOfNumbers, getRandomInt } from '../services/utils.service'

const { articles, event1, event2, vod } = dashboardJson

const mostViewed = computed(() =>
  getArrayOfNumbers(1, 3).map(() => {
    return articles[getRandomInt(0, articles.length - 1)]
  })
)
</script>

<style scoped lang="scss"></style>
