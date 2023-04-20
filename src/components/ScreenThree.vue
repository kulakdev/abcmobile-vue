<template>
  <div class="screenThree">
    <div class="text1 textWhite">
      Прохождение теста займет у вас не более <span class="textGold bold900">12 минут</span>, а его
      результаты вы сможете <span class="textGold bold900">использовать всю жизнь.</span>
    </div>
    <div class="greyContainer">
      <span class="text2"
        >Профессиональная интерпретация и детально
        <span class="bold">проработанные рекомендации</span> позволят вам качественно
        <span class="bold">изменить все аспекты своей жизни</span>: от финансового до
        любовного.</span
      >
    </div>
    <div class="buttonTransparent">
      <ButtonTransparent text="ПРОЙТИ ТЕСТ" />
    </div>
    <div class="copyright">© 2023 :P</div>
  </div>
</template>

<script lang="ts">
import ButtonTransparent from './ButtonTransparent.vue'

export default {
  name: 'ScreenThree',
  components: { ButtonTransparent }
}
</script>

<style scoped>
.screenThree {
  width: 100%;
  height: 100vh;
  background-image: url('src/assets/space.webp');
  padding-left: 11px;
  padding-right: 11px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text1 {
  width: 100%;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 13px;

  margin-top: 54px;
  letter-spacing: 0.05em;
}

.text2 {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  letter-spacing: 0.05em;

  color: #181818;
}

.buttonTransparent {
  width: max-content;
  margin: 34px auto;
}
.bold900 {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;

  letter-spacing: 0.05em;
}
.bold {
  font-weight: bold;
  font-weight: 700;
}
.greyContainer {
  width: 100%;
  padding: 30px 15px;
  background: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
}

.copyright {
  width: max-content;
  margin: 13px auto;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.05em;
}
@media (min-width: 576px) {
  .screenThree {
    height: 571px;
  }
}
</style>
