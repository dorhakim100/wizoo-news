<template>

<app-header/>
  <main>
    <router-view/>
  </main>
</template>

<script setup>

  import  AppHeader  from './components/AppHeader.vue'



</script>


<style scoped lang="scss">

    @import './styles/setup/variables';

  
    main{
      margin-top: $header-height-wide;
        background-color: #fff;
        width: 100vw;
    }

</style>
