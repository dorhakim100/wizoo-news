<template>
  <header class="header-container">
    <img :src="`${desktop}`" alt="" />

    <div class="links-container">
      <div class="upper-container">
        <nav class="upper-nav">
          <a
            v-for="link in upperLinks"
            :key="link.title"
            :href="link.link"
            class="nav-link"
          >
            {{ link.title }}
          </a>
        </nav>
        <div class="socials-container">
          <div
            class="icon-container circle pointer"
            v-for="social in socials"
            :key="social.social"
            @click="navigateToSocioal(social.link)"
          >
            <img :src="social.icon" :alt="social.social" class="icon" />
          </div>
        </div>
      </div>

      <nav class="lower-nav">
        <a
          v-for="link in lowerLinks"
          :key="link.title"
          :href="link.link"
          class="nav-link"
        >
          {{ link.title }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import desktop from '../../public/logo-desktop.png'

import { links } from '../assets/jsons/app-header/header-links.json'
import { socials } from '../assets/jsons/app-header/socials.json'

const router = useRouter()

const upperLinks = computed(() => links.filter((link) => link.isUpper))
const lowerLinks = computed(() => links.filter((link) => !link.isUpper))

function navigateToSocioal(link) {
  window.open(link)
}
</script>

<style scoped lang="scss">
@import '../styles/setup/_variables';

.header-container {
  position: fixed;
  left: 0;
  right: 0;

  height: $header-height-wide;
  background-color: $header-bg-color-wide;

  box-shadow: $header-shadow;

  display: grid;
  grid-template-columns: auto 1fr;

  img {
    padding: 1.4em;
  }

  .links-container {
    display: grid;

    .upper-container {
      background-color: $primary;
      color: $text-white;
      padding: 15px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .upper-nav {
        display: flex;
        gap: 34px;
      }

      .socials-container {
        display: flex;
        align-items: center;
        gap: 0.5em;

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $header-socials-background;
          width: 2em;
          height: 2em;
        }
        .icon {
          padding: 0em;
          height: 14px;
          width: 15px;
        }
      }
    }
  }
}
</style>
