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

    <div
      v-if="!myBoolean"
      style="
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100vh;
        width: 100%;
        background-color: brown;
      "
    >
      <a
        style="
          position: relative;
          display: block;
          width: 100px;
          height: 100px;
          min-width: fit-content;
          background-color: tomato;
        "
        @click="toggleComponent"
      >
        <MenuIcon />
      </a>
    </div>
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
