<template>
  <div :class="`type-header-container ${color}`">
    <div class="title-container">
      <Merkaz :lower-color="color" />
      <h5>
        <slot />
      </h5>
    </div>
    <CustomLabel :type="type" :is-arrow-icon="true">{{
      typeHeaderJson.label
    }}</CustomLabel>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CustomLabel from '../common/CustomLabel.vue'
import Merkaz from '../common/Merkaz.vue'

import typeHeaderJson from '../../assets/jsons/type-header/type-header.json'
import { getColorNameFromType } from '../../services/utils.service'

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
})

const color = getColorNameFromType(props.type)
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';

.type-header-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2em 0;

  &::after {
    position: absolute;
    content: '';
    left: 150px;
    right: 360px;
    bottom: 5px;
    height: 1px;
  }

  &.gold {
    &::after {
      background-color: $color-gold;
    }
  }

  &.green {
    &::after {
      background-color: $color-green;
    }
  }

  &.blue {
    &::after {
      background-color: $color-blue;
    }
  }

  &.bottle-green {
    &::after {
      background-color: $color-bottle-green;
    }
  }

  &.orange {
    &::after {
      background-color: $color-orange;
    }
  }

  &.scarlet {
    &::after {
      background-color: $color-scarlet;
    }
  }

  &.pink {
    &::after {
      background-color: $color-pink;
    }
  }

  .title-container {
    display: flex;
    gap: 1em;

    h5 {
      align-self: end;
      font-size: 2em;
    }
  }
}
</style>
