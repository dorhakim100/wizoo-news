<template>
  <div class="vod-container full-width">
    <div class="content-container">
      <CustomHeader>bla</CustomHeader>
    </div>
  </div>
</template>

<script setup>
import CustomHeader from '../common/CustomHeader.vue'
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.vod-container {
  background-color: $vod-bg-color;
  height: 400px;

  .content-container {
    margin: 0 auto;
    max-width: $max-width-screen;
  }
}
</style>
