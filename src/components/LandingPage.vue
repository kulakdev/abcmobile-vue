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
      <p class="text1 textWhite">Пройдите точный и быстрый</p>
      <h1 class="textGold">ТЕСТ НА <span style="display: block">ОПРЕДЕЛЕНИЕ</span>IQ</h1>
      <div class="imageContainer">
        <div class="blurryBg" />
        <div class="imageStyle" />
      </div>
      <ButtonComponent text="ПРОЙТИ ТЕСТ" class="buttonStyle"></ButtonComponent>
      <h2 class="textGold">
        и получите рекомендации по развитию своего интеллекта
        <span class="textWhite" style="display: block"
          >и улучшению финансового благосостояния и личной жизни</span
        >
      </h2>
      <a class="anchor textWhite" href="#">
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
        <span class="anchorText">Подробнее</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Yeseva+One&display=swap');

.landing {
  padding: 46px 10px 0px;
  width: 100%;
  height: 100vh;
  background-image: url('src/assets/space.webp') !important;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
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
}
.imageContainer {
  margin-left: auto;
  margin-right: auto;
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
.imageStyle {
  position: absolute;
  background-image: url('src/assets/brain.webp');

  background-size: contain;
  width: 170px;
  height: 150px;
}

.buttonStyle {
  margin-top: 20px;
  position: relative;
  margin: initial auto;
  align-self: center;
}
.anchor {
  width: 100%;
  height: 54px;
  padding: 11px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: grid;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}

.anchorText {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* DESKTOP VER */

@media (min-width: 576px) {
  .landing {
    width: 100%;
    height: 569px;
    background-image: url('src/assets/space.webp') !important;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
}

/* These are REUSABLE MINI-CLASSES or styling for DEFAULT HTML COMPONENTS */

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

h2 {
  padding-top: 10px;

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

.textGold {
  color: #ffc700;
}
.textWhite {
  color: #fff;
}
</style>
