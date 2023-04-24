<template>
  <div class="styleOfThinking">{{ styleOfThinking }}</div>
</template>

<script>
export default {
  data() {
    return {
      styleOfThinking: 'Определение стиля мышления'
    }
  },
  mounted() {
    setInterval(() => {
      this.styleOfThinking += '.'
      if (this.styleOfThinking.length >= 40) {
        this.styleOfThinking += '\n'
      }
    }, 100)
  }
}
</script>

<style scoped>
.styleOfThinking {
  max-width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
}
</style>
