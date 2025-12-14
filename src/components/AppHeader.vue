<template>
  <header :class="`header-container  ${!isTop0 ? 'scrolled' : ''}`">
    <img :src="`${mobile}`" :class="`mobile-logo`" alt="" />
    <img
      :src="`${desktop}`"
      :class="`${!isTop0 ? 'hide' : ''} desktop-logo`"
      alt=""
    />
    <div
      :class="`basic-logo-container pointer ${!isTop0 ? 'scrolled' : ''}`"
      @click="navigateToHome()"
    >
      <MerkazBasicLogo class="basic-logo" />
    </div>

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
        <div :class="`socials-container ${!isTop0 ? 'hide' : ''}`">
          <div
            class="icon-container circle pointer"
            v-for="social in socials"
            :key="`${social.social}-header`"
            @click="navigateToLink(social.link)"
          >
            <img :src="social.icon" :alt="social.social" class="icon" />
          </div>
        </div>
      </div>

      <div :class="`lower-container ${!isTop0 ? 'opacity-0' : ''}`">
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
    <HeaderMobileMenu class="menu-icon" />
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

import { navigateToLink } from '../services/utils.service'
import { ROUTES } from '../router/const'

import CustomSearch from '../components/common/CustomSearch.vue'
import HeaderMobileMenu from '../assets/icons/header-mobile-menu.svg'

import desktop from '../../public/logo-desktop.png'
import MerkazBasicLogo from '../../public/merkaz-logo-lower.svg'
import mobile from '../../public/logo-mobile.png'

import { links } from '../assets/jsons/app-header/header-links.json'
import { socials } from '../assets/jsons/app-header/socials.json'

const router = useRouter()

const searchValue = ref('')

const isTop0 = ref(true)

const upperLinks = computed(() => links.filter((link) => link.isUpper))
const lowerLinks = computed(() => links.filter((link) => !link.isUpper))

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  const pixelsFromTop = window.scrollY
  if (pixelsFromTop !== 0) {
    isTop0.value = false
  } else {
    isTop0.value = true
  }
}

const navigateToHome = () => {
  router.push(`${ROUTES.HOME}`)
}
</script>

<style scoped lang="scss">
@import '../styles/setup/_variables';

.header-container {
  position: relative;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 20;

  height: $header-height-wide;
  background-color: $header-bg-color-wide;

  box-shadow: $header-shadow;

  display: grid;
  grid-template-columns: auto 1fr;
  transition: 0.3s ease;
  transition: background-color 0s;

  @media (max-width: 1216px) {
    font-size: 0.8em;
  }

  img {
    padding: 1.4em;
    transition: 0.3s ease;
  }

  .basic-logo-container {
    position: absolute;
    inset-inline-start: -50px;
    top: 5px;
    transition: 0.3s ease;

    &.scrolled {
      @media (min-width: 600px) {
        inset-inline-start: 10px;
      }
    }
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
      gap: 1em;

      .upper-nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 960px;
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
        width: 260px;
        margin-inline-end: 5px;
      }
    }
  }
  &.scrolled {
    background-color: $primary;

    @media (min-width: 600px) {
      height: 57px;
    }
    .upper-nav {
      margin-inline-start: 50px;
    }
  }
  @media (min-width: 600px) {
    .mobile-logo {
      display: none;
    }
  }
  @media (max-width: 600px) {
    height: $header-height-narrow;
    background-color: $primary;
    align-items: center;
    grid-auto-flow: column;
    padding: 12px;

    .desktop-logo {
      display: none;
    }

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

  .menu-icon {
    @media (min-width: 600px) {
      display: none;
    }
  }
}
</style>
