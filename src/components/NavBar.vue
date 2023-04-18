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
  margin-left: 15px;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.icon {
  width: 24px;
  height: 1rem !important;
  background-color: aquamarine;
}
</style>
