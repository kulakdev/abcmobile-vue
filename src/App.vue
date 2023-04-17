<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue'
import IphoneImage from './components/IphoneImage.vue'
</script>

<template>
  <div class="wrapper">
    <ButtonComponent text="ДАЛЕЕ" />
    <div class="card"></div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: darkcyan;
}
.card {
  height: 569px;
  width: 320px;
  background-color: black;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
