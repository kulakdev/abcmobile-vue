<template>
  <div>
    <div class="voidImage" />
    <div class="blueBlob" />
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
  /* background-image: url('src/assets/backgroundLight.webp'); */
  background-size: 571px 339px;
  background-position: center;
}
.blueBlob {
  width: 100%;
  height: 100%;
  background-size: 339px;
  background-image: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
}
</style>
