<template>
  <CustomHeader :is-gradient="true" :color="'black'">{{ header }}</CustomHeader>
  <PodcastCard
    v-for="podcast in props.podcasts"
    :podcast="podcast"
    :key="podcast._id"
  />
</template>

<script setup>
import { defineProps } from 'vue'

import CustomHeader from '../common/CustomHeader.vue'
import PodcastCard from '../podcast/PodcastCard.vue'

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  podcasts: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.custom-header-container {
  margin-top: 2em !important;
  margin-bottom: 2em !important;
}
</style>
