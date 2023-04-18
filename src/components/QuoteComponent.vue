<template>
  <div class="voidImage">
    <div class="blueBlob"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'QuoteComponent'
}
</script>

<style scoped>
.voidImage {
  width: 100%;
  height: 339px;
  background-image: url('src/assets/backgroundLight.webp');
}
.blueBlob {
  background: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
}
</style>
