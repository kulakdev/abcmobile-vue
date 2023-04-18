<template>
  <div class="secondScreen">
    <p class="text">
      Также по результатам теста <span class="bold">вы получите</span> подробные
      <span class="bold">советы</span> по определению наиболее перспективной
      <span class="bold">для вашего типа интеллекта сферы деятельности</span>, которая принесет вам
      скорейший финансовый результат.
    </p>
    <img class="imageElement" src="src/assets/brains.webp" />
    <ButtonComponent text="ПРОЙТИ ТЕСТ" />
  </div>
</template>

<script lang="ts">
import ButtonComponent from './ButtonComponent.vue'

export default {
  name: 'ScreenTwo',
  components: { ButtonComponent }
}
</script>

<style scoped>
.secondScreen {
  width: 100%;
  height: max-content;
  padding: 38px 11px;
  background-color: #fff;
  color: #272727;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.05em;
}

.text {
  width: inherit;
}
.imageElement {
  margin-left: 33px;
  margin-right: 33px;
}
.bold {
  font-weight: bold;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
