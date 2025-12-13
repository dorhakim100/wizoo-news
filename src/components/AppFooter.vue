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
    </div>
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

const socials = [
  { name: 'facebook', icon: Facebook },
  { name: 'instagram', icon: Instagram },
  { name: 'linkedin', icon: LinkedIn },
  { name: 'tik-tok', icon: TikTok },
  { name: 'whatsapp', icon: WhatsApp },
  { name: 'x', icon: XIcon },
  { name: 'youtube', icon: YouTube },
]
</script>

<style scoped lang="scss">
@import '../styles/setup/_variables';

footer {
  margin-top: 7em;
  background-color: $primary;
  height: 200px;
  //   width: 100vw;

  .content-container {
    position: relative;
    width: 100%;
    max-width: $max-width-screen;

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
}
</style>
