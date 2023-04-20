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
        width: max-content;
        height: max-content;
        min-width: fit-content;
        margin: 0;

        background-color: tomato;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
      "
      :class="{ left: myBoolean, right: !myBoolean }"
      @click="toggleComponent"
    >
      <div v-if="myBoolean"><MenuIcon /></div>
      <div v-else class="cross">
        <div class="iconX" style="transform: rotate(-45deg)"></div>
        <div class="iconX" style="transform: rotate(45deg)"></div>
      </div>
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
.iconX {
  position: absolute;
  top: calc(50% - 0.5mm);
  left: -4px;
  width: 36px;
  height: 1mm;
  background-color: #ffc700;
}

.right {
  right: 15px;
  top: 17px;
  left: auto;
}

.left {
  left: 15px;
  top: 17px;
  right: auto;
}

.cross {
  width: 28px;
  height: 28px;
  display: block;
  align-self: center;
  justify-self: center;
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
