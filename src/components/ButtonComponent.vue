<script lang="ts">
export default {
  name: 'ButtonComponent',
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
  <button class="buttonStyle" role="button">{{ text }}</button>
</template>

<style>
.buttonStyle {
  width: 189px;
  height: 41px;
  background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
  border-radius: 20px;
  border-style: none;

  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #0d0c11;
}
.buttonStyle:active {
  background: #dadada;
  color: #8e8e8e;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
</style>
