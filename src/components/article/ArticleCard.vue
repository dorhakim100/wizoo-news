<template>
  <article :class="`article-card ${isMain ? 'main' : ''}`">
    <img :src="article.img" :alt="article.type" />
    <h3>{{ article.title }}</h3>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

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
.article-card {
  //   width: 199px;
  //   height: 100;

  img {
    max-width: 282px;
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
