<template>
  <div class="image-container">
    <img :src="imageUrl" class="centered-image" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CenteredImage',
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
