<template>
  <div>
    <div class="landing">
      <p style="text1">Пройдите точный и быстрый</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&family=PT+Serif&display=swap');
.landing {
  width: 100%;
  height: 100vh;
  padding-top: 46px;
  background-image: url('src/assets/space.webp') !important;
}

.text1 {
  font-family: PT-Serif;
}
</style>
