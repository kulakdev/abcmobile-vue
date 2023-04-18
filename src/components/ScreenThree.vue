<template>
  <div class="screenThree">
    <div class="text1 textWhite">
      Прохождение теста займет у вас не более <span class="textGold bold900">12 минут</span>, а его
      результаты вы сможете <span class="textGold bold900">использовать всю жизнь.</span>
    </div>
    <div class="greyContainer"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScreenThree'
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
}

.text1 {
  width: 100%;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  margin-top: 54px;
  letter-spacing: 0.05em;
}

.bold900 {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;

  letter-spacing: 0.05em;
}

.greyContainer {
  width: 100%;
  padding: 30px 15px;
  background: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
}
@media (min-width: 576px) {
  .screenThree {
    height: 570px;
  }
}
</style>
