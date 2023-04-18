<template>
  <div class="voidWrapper">
    <div class="voidImage" />
    <div class="blueBlob" />
    <p class="voidText white">
      Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и
      выработать список рекомендаций для повышения этого показателя.
    </p>
    <QuoteIcon class="quote1" />
    <QuoteIcon class="quote2" />
  </div>
</template>

<script lang="ts">
import QuoteIcon from './icons/QuoteIcon.vue'

export default {
  name: 'QuoteComponent',
  components: { QuoteIcon }
}
</script>

<style scoped>
.voidWrapper {
  width: 100%;
  height: 339px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.voidImage {
  position: absolute;
  width: 100%;
  height: 339px;
  background-image: url('src/assets/backgroundLight.webp');
  background-size: 571px 339px;
  background-position: center;
}

.blueBlob {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
}

.voidText {
  /* padding: 69px 36px; */
  max-width: 248px;
  height: max-content;
  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
}
</style>
