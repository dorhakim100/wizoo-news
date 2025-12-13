<template>
  <!-- <div class="play-icon circle"><CaretRightOutlined /></div> -->
  <div class="icon-container circle">
    <CaretRightOutlined class="play-icon circle" />
  </div>
</template>

<script setup>
import { CaretRightOutlined, PlayCircleFilled } from '@ant-design/icons-vue'
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables.scss';

.icon-container {
  opacity: 100%;
  //   width: 3.3em;
  //   height: 3.3em;
  background-color: $pale-white-background;
  padding: 0.6em;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.play-icon {
  margin-left: 3px;
  min-width: 20px;
  min-height: 20px;

  font-size: 2em;
}
</style>
