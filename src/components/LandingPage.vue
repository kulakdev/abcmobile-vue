<script lang="ts">
import ButtonComponent from './ButtonComponent.vue'

export default {
  name: 'LandingPage',
  components: { ButtonComponent }
}
</script>

<template>
  <div>
    <div class="landing">
      <p class="text1">Пройдите точный и быстрый</p>
      <h1>ТЕСТ НА <span style="display: block">ОПРЕДЕЛЕНИЕ</span>IQ</h1>
      <ButtonComponent text="ПРОЙТИ ТЕСТ"></ButtonComponent>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Yeseva+One&display=swap');
.landing {
  width: 100%;
  height: 100vh;
  padding-top: 46px;
  background-image: url('src/assets/space.webp') !important;

  display: flex;
  flex-direction: column;
}

h1 {
  display: block;
  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
  margin: initial 20px;
  margin-top: 40px;

  color: #ffc700;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.text1 {
  display: block;

  width: 100%;

  padding-top: 27px;

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
