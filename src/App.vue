<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue'
import IphoneImage from './components/IphoneImage.vue'
</script>

<template>
  <div class="wrapper">
    <ButtonComponent text="ДАЛЕЕ" />
    <div class="phone">
      <div class="card"></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: darkcyan;
}

.phone {
  width: 372px;
  height: 753px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: blue;
}
.card {
  left: 27px;
  top: 93px;
  height: 569px;
  width: 320px;
  background-color: black;
  overflow-y: scroll;
}
.card::-webkit-scrollbar {
  width: 1em;
}

.card::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.card::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
