<script lang="ts">
import MenuIcon from './icons/MenuIcon.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: { MenuIcon },
  setup() {
    const myBoolean = ref(true)

    function toggleComponent() {
      myBoolean.value = !myBoolean.value
    }

    return {
      myBoolean,
      toggleComponent
    }
  }
})
</script>

<template>
  <div class="navbar">
    <a class="button" @click="toggleComponent">
      <MenuIcon />
    </a>
    <p style="color: aqua; font-size: medium">{{ myBoolean }}</p>
    <a
      style="
        position: absolute;

        width: 24px;
        height: 16px;
        margin-left: 15px;
        margin-top: 17px;
        min-width: fit-content;
        background-color: tomato;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
      "
      @click="toggleComponent"
    >
      <MenuIcon />
    </a>
    <div v-if="!myBoolean" class="menu"></div>
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
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color: blue;
}
@media (min-width: 576px) {
  .menu {
    width: 320px;
    height: 570px;
    left: 27px;
    top: 93px;
  }
}
</style>
