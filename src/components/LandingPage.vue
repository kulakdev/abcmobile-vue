<template>
  <div>
    <div class="landing">
      <p class="text1">Пройдите точный и быстрый</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Yeseva+One&display=swap');
.landing {
  width: 100%;
  height: 100vh;
  padding-top: 46px;
  background-image: url('src/assets/space.webp') !important;
}

.text1 {
  width: 100%;

  top: 27px;

  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #fff;
}
</style>
