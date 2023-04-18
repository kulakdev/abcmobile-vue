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
      <p class="text1 white">Пройдите точный и быстрый</p>
      <h1 class="gold">ТЕСТ НА <span style="display: block">ОПРЕДЕЛЕНИЕ</span>IQ</h1>
      <div class="imageContainer">
        <div class="blurryBg" />
        <div class="imageStyle" />
      </div>
      <ButtonComponent text="ПРОЙТИ ТЕСТ" class="buttonStyle"></ButtonComponent>
      <h2 class="gold">
        и получите рекомендации по развитию своего интеллекта
        <span class="white">и улучшению финансового благосостояния и личной жизни</span>
      </h2>
      <a class="anchor" href="#">
        <div class="circle">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.45453 7.63636L4.45453 2.10454L6.99544 4.64545L7.63635 4L3.99999 0.363632L0.363625 4L1.00453 4.6409L3.54544 2.10454L3.54544 7.63636L4.45453 7.63636Z"
              fill="#0C0B10"
            />
          </svg>
        </div>
        <span>Подробнее</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Yeseva+One&display=swap');

.imageContainer {
  margin-left: auto;
  margin-right: auto;
  width: 170px;
  height: 150px;
}
.imageStyle {
  position: absolute;
  background-image: url('src/assets/brain.webp');

  background-size: contain;
  width: 170px;
  height: 150px;
}
.blurryBg {
  position: absolute;
  background-image: url('src/assets/brain.webp');

  background-size: contain;
  width: 170px;
  height: 150px;
  justify-self: flex-end;
  filter: blur(20px);
  -webkit-filter: blur(20px);
}
.buttonStyle {
  margin-top: 20px;
  position: relative;
  margin: initial auto;
  align-self: center;
}
.landing {
  width: 100%;
  height: 100vh;
  padding-top: 46px;
  background-image: url('src/assets/space.webp') !important;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}

h2 {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #ffc700;
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

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.anchor {
  width: 100%;
  height: 54px;
  justify-content: center;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #fff;
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

.gold {
  color: #ffc700;
}
.white {
  color: #fff;
}
</style>
