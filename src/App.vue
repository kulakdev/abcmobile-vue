<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue'
import IphoneImage from './components/IphoneImage.vue'
</script>

<template>
  <div class="wrapper">
    <IphoneImage />
    <ButtonComponent />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    background-color: darkcyan;
    height: 100vh;
    width: 100vw;
  }
}
</style>
