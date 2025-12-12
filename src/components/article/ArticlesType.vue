<template>
  <TypeHeader :type="type">{{ articleService.getHebrewType(type) }}</TypeHeader>
</template>

<script setup>
import { defineProps } from 'vue'

import { articleService } from '../../services/article/article.service'

import TypeHeader from './TypeHeader.vue'
import ArticleCard from './ArticleCard.vue'

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
</script>

<style scoped lang="scss"></style>
