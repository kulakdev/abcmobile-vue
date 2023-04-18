<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue'
import NavBar from './components/Navbar.vue'
import LandingPage from './components/LandingPage.vue'
</script>

<template>
  <div class="wrapper">
    <!-- <ButtonComponent text="ДАЛЕЕ" /> -->
    <div class="phone">
      <div class="card">
        <NavBar />
        <LangingPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0;
  width: 100vw;

  background-image: none;
  background-size: cover;
}

.phone {
  width: 372px;
  height: 753px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: none;
}

.card {
  top: 46px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  background-size: contain;
  background-image: url('src/assets/space.webp') !important;
}

@media (min-width: 576px) {
  .wrapper {
    background-image: url('src/assets/ventura.jpg');
  }
  .phone {
    background-image: url('src/assets/phone.png');
  }

  .card {
    left: 27px;
    top: 93px;
    height: 569px;
    width: 320px;

    overflow-y: scroll;
    background-color: greenyellow;
  }
}

.card::-webkit-scrollbar {
  width: 1px;
}

.card::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.card::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
