<template>
  <div class="merkaz-container">
    <Gradient v-if="props.isUpperGradient" class="upper" />
    <Upper v-else class="upper" />
    <Lower :class="`lower ${lowerColor}`" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import Upper from '../../../public/merkaz-logo-upper.svg'
import Gradient from '../../../public/merkaz-logo-upper-gradient.svg'
import Lower from '../../../public/merkaz-logo-lower.svg'

const props = defineProps({
  isUpperGradient: {
    type: Boolean,
    required: false,
  },
  lowerColor: {
    type: String,
    required: false,
  },
})
</script>

<style scoped lang="scss">
@import '../../styles//setup/variables';

.merkaz-container {
  position: relative;

  width: 44px;
  height: 45px;

  .upper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .lower {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;

    &.gold {
      :deep(path) {
        fill: $color-gold;
      }
    }

    &.green {
      :deep(path) {
        fill: $color-green;
      }
    }

    &.blue {
      :deep(path) {
        fill: $color-blue;
      }
    }

    &.bottle-green {
      :deep(path) {
        fill: $color-bottle-green;
      }
    }

    &.orange {
      :deep(path) {
        fill: $color-orange;
      }
    }

    &.scarlet {
      :deep(path) {
        fill: $color-scarlet;
      }
    }

    &.pink {
      :deep(path) {
        fill: $color-pink;
      }
    }
    &.black {
      :deep(path) {
        fill: $text-primary;
      }
    }
  }
}
</style>
