<script lang="ts">
import MenuIcon from './icons/MenuIcon.vue'

export default {
  name: 'NavBar',
  components: { MenuIcon }
}
</script>

<template>
  <div class="navbar">
    <a class="button">
      <MenuIcon />
    </a>
  </div>
</template>

<style>
.navbar {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;

  display: flex;
  height: 46px;
  width: 100%;
  background-color: #181818;
}
.button {
  width: 24px;
  height: 16px;
  margin-left: 15px;
  margin-top: 17px;
}
.icon {
  width: 24px;
  height: 1mm;
  background-color: #696969;
}
</style>
