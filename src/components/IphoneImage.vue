<template>
  <div class="image-container">
    <img src="src/assets/backgroundImage.webp" class="centered-image" />
  </div>
</template>

<style>
.image-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.centered-image {
  max-width: 1920px;
  max-height: 1200px;

  margin: 0;
  padding: 0;
}
</style>
