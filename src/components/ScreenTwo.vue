<template>
  <div class="secondScreen">
    <p>
      Также по результатам теста <span class="bold">вы получите</span> подробные
      <span class="bold">советы</span> по определению наиболее перспективной
      <span class="bold">для вашего типа интеллекта сферы деятельности</span>, которая принесет вам
      скорейший финансовый результат.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScreenTwo'
}
</script>

<style scoped>
.secondScreen {
  width: 100%;
  height: 700px;
  padding: 38px 11px;
  background-color: #fff;
  color: #272727;

  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.05em;
}

.bold {
  font-weight: bold;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
