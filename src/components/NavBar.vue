<script lang="ts">
export default {
  name: 'NavBar'
}
</script>

<template>
  <div class="navbar">
    <a class="button">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </a>
  </div>
</template>

<style>
.navbar {
  position: absolute;
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
  justify-content: space-between;

  padding-left: 15px;
  padding-top: 17px;
}
.icon {
  width: 24px;
  height: 2.67px !important;
  background-color: aquamarine;
}
</style>
