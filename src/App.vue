<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <main>
      <div class="wrapper">
        <div class="phone">
          <div class="card">
            <header>
              <NavBar></NavBar>
            </header>
            <body>
              <router-view></router-view>
            </body>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.wrapper {
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-image: none;
  background-size: cover;
}

.phone {
  width: inherit;
  height: inherit;
  background-image: none;
}

.card {
  top: 0px;
  width: auto;
  height: inherit;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  background-size: contain;
  background-color: grey;
}

@media (min-width: 576px) {
  .wrapper {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;

    background-image: url('src/assets/ventura.jpg');
    background-size: cover;
  }
  .phone {
    width: 372px;
    height: 753px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('src/assets/phone.png');
  }

  .card {
    left: 27px;
    top: 93px;
    height: 570px;
    width: 320px;

    overflow-y: scroll;
    background-color: #181818;
  }
}

.card::-webkit-scrollbar {
  width: 1px;
}

.card::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
}

.card::-webkit-scrollbar-thumb {
  background: linear-gradient(#181818 20%, #9198e5, #181818 80%);
  outline: 0px solid slategrey;
}
</style>
