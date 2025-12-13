<template>
  <footer class="full-width">
    <div class="content-container">
      <div class="logo-container">
        <img :src="logo" alt="logo" />
        <div class="socials-container">
          <div
            class="icon-container circle pointer"
            v-for="social in socials"
            :key="`${social.name}-footer`"
          >
            <component :is="social.icon" class="icon" />
          </div>
        </div>
      </div>
      <div class="sections-container">
        <div
          v-for="(section, index) in links"
          :key="`${section.title}-${index}`"
          class="section-container"
        >
          <h4>{{ section.title }}</h4>
          <ul>
            <li
              v-for="(link, i) in section.items"
              :key="`${link}-${i}`"
              class="pointer"
            >
              {{ link }}
            </li>
          </ul>
          <div class="read-more-container pointer">
            <span class="read-more">קרא עוד</span>
            <ArrowDown class="arrow-down" />
          </div>
        </div>
      </div>
    </div>
    <TradeMarks />
  </footer>
</template>

<script setup>
import logo from '../../public/logo-desktop.png'

import Facebook from '../assets/icons/socials-links/facebook.svg'
import Instagram from '../assets/icons/socials-links/instagram.svg'
import LinkedIn from '../assets/icons/socials-links/linkedin.svg'
import TikTok from '../assets/icons/socials-links/tik-tok.svg'
import WhatsApp from '../assets/icons/socials-links/whatsapp.svg'
import XIcon from '../assets/icons/socials-links/x.svg'
import YouTube from '../assets/icons/socials-links/youtube.svg'

import ArrowDown from '../assets/icons/arrow-down.svg'

import TradeMarks from '../components/common/TradeMarks.vue'

const socials = [
  { name: 'facebook', icon: Facebook },
  { name: 'instagram', icon: Instagram },
  { name: 'linkedin', icon: LinkedIn },
  { name: 'tik-tok', icon: TikTok },
  { name: 'whatsapp', icon: WhatsApp },
  { name: 'x', icon: XIcon },
  { name: 'youtube', icon: YouTube },
]

import linksJson from '../assets/jsons/app-footer/footer-links.json'
const { links } = linksJson
</script>

<style scoped lang="scss">
@import '../styles/setup/_variables';

footer {
  margin-top: 7em;
  background-color: $primary;
  color: $text-white;
  text-align: start;

  .content-container {
    position: relative;
    width: 100%;
    max-width: $max-width-screen;
    padding: 120px 0 60px;

    margin: 0 auto;

    .logo-container {
      position: absolute;
      left: 0;
      right: 0;
      top: -40px;
      background-color: $footer-logo-container-bg;
      padding: 1em 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 84px;
        align-self: start;
      }

      .socials-container {
        display: flex;
        gap: 6px;
      }

      .icon-container {
        background-color: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        .icon {
          :deep(path) {
            fill: $white-background;
          }
        }
      }
    }
  }
  .sections-container {
    display: flex;
    justify-content: space-between;

    .section-container {
      display: grid;
      gap: 1em;
      h4 {
        font-size: 2em;
      }

      ul {
        line-height: 250%;
      }

      .read-more-container {
        display: flex;
        align-items: center;
        gap: 8px;

        .read-more {
          color: $secondary;
        }

        .arrow-down {
          margin-top: 3px;
        }
      }
    }
  }
}
</style>
