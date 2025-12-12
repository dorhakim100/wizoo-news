<template>
  <article :class="`article-card ${isMain ? 'main' : ''}`">
    <img :src="article.img" :alt="article.type" />
    <h3 class="text-overflow">{{ article.title }}</h3>
    <div class="writer-date-container">
      <span>{{ article.writer }}</span>
      <Divider type="vertical" />
      <span>{{ article.date }}</span>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

import { Divider } from 'ant-design-vue'

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  isMain: {
    type: Boolean,
    required: true,
  },
})
console.log(props.article)
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.article-card {
  //   width: 199px;
  //   height: 100;
  text-align: start;

  max-width: 282px;
  img {
    max-width: 282px;
  }

  .writer-date-container {
    display: flex;
    align-items: center;

    .ant-divider {
      background-color: $text-primary;
    }
  }

  &.main {
    display: flex;
    gap: 10px;

    img {
      max-width: none;
    }
  }
}
</style>
