<template>
  <header :class="`header-container ${isMobile ? 'mobile' : ''}`">
    <img :src="`${isMobile ? mobile : desktop}`" alt="" />

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
            @click="navigateToLink(social.link)"
          >
            <img :src="social.icon" :alt="social.social" class="icon" />
          </div>
        </div>
      </div>

      <div class="lower-container">
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
        <CustomSearch v-model:searchValue="searchValue" />
      </div>
    </div>
    <HeaderMobileMenu v-if="isMobile" />
  </header>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'

import { navigateToLink } from '../services/utils.service'
import { mobileBreakpoint } from '../config/css-variables'

import CustomSearch from '../components/common/CustomSearch.vue'

import HeaderMobileMenu from '../assets/icons/header-mobile-menu.svg'

import desktop from '../../public/logo-desktop.png'
import mobile from '../../public/logo-mobile.png'

import { links } from '../assets/jsons/app-header/header-links.json'
import { socials } from '../assets/jsons/app-header/socials.json'

const searchValue = ref('')
const isTop0 = ref(true)
const isMobile = ref(window.innerWidth <= mobileBreakpoint)

const upperLinks = computed(() => links.filter((link) => link.isUpper))
const lowerLinks = computed(() => links.filter((link) => !link.isUpper))

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})

function handleScroll() {
  const pixelsFromTop = window.scrollY
  if (pixelsFromTop !== 0) isTop0.value = true
  else isTop0.value = false
}

function handleResize() {
  console.log(isMobile.value)

  window.innerWidth <= mobileBreakpoint
    ? (isMobile.value = true)
    : (isMobile.value = false)
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
    grid-template-rows: 57px 1fr;

    .upper-container {
      background-color: $primary;
      color: $text-white;
      padding: 15px;
      height: 57px;
      align-self: start;

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

    .lower-container {
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 15px;

      .lower-nav {
        display: flex;
        gap: 30px;
      }
      .custom-search-container {
        width: 270px;
      }
    }
  }

  &.mobile {
    height: $header-height-narrow;
    background-color: $primary;
    align-items: center;
    grid-auto-flow: column;
    padding: 12px;

    img {
      padding: 0;
    }

    svg {
      justify-self: end;
    }

    .links-container {
      position: absolute;
      left: -5000px;
    }
  }
}
</style>
