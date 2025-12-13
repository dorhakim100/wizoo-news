<template>
  <div class="trademarks-container full-width">
    <div class="content-container">
      <div class="logo-container eden">
        <span>{{ EDEN_TEXT }}</span>
        <img :src="eden" alt="eden-logo" class="logo" />
      </div>
      <div class="logo-container wizzo">
        <span>{{ WIZZO_TEXT }}</span>
        <img :src="wizzo" alt="wizzo-logo" class="logo" />
      </div>
      <span>{{ MERKAZ_TRADE_MARKS }}</span>
    </div>
  </div>
</template>

<script setup>
import wizzo from '../../../public/wizzo-logo.png'
import eden from '../../../public/eden-jarmon-logo.png'

const MERKAZ_TRADE_MARKS =
  '© כל הזכויות שמורות למרכז הנדל"ן ישראל - סקאלה ד.מ בע"מ Scala Group D.M'
const WIZZO_TEXT = 'פיתוח האתר'
const EDEN_TEXT = 'אפיון ועיצוב האתר'
</script>

<style scoped lang="scss">
@import '../../styles/setup/_variables';
.trademarks-container {
  padding: 2em;
  background-color: $trademarks-bg;

  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: $max-width-screen;

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;

      &.wizzo {
        span {
          align-self: end;
        }
        img {
          width: 50px;
        }
      }

      &.eden {
        img {
          width: 197px;
        }
      }
    }
  }
}
</style>
