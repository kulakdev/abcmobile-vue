<script lang="ts">
export default {
  name: 'ButtonTransparent',
  props: {
    text: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <button class="buttonTransparentStyle" role="button">{{ text }}</button>
</template>

<style>
.buttonTransparentStyle {
  width: 189px;
  height: 41px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 12px 18px;

  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #fff;

  transition: border-color 250ms ease-in-out, color 60ms ease-in-out, transform 60ms ease-in-out;
}
.buttonTransparentStyle:active {
  border: 1px solid #ffc700;
  color: #ffc700;
  transform: scale(1.01);

  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
</style>
