<template>
  <div class="testPage">
    <div v-if="selectedPage">{{ selectedPage.title }}</div>
    <ul v-if="selectedPage.list">
      <div class="checkbox">
        <radio v-for="item in selectedPage.list" v-bind:key="item">{{ item }}</radio>
      </div>
    </ul>
    <div>poggers</div>
    <div v-if="selectedPage.image">
      <img style="width: 100px" :src="selectedPage.image" />
    </div>
    <a @click="incrementIndex">Next</a>
    <a @click="decrementIndex">Previous</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      currentIndex: 0,
      people: [
        { title: 'John', list: ['one', 'two'] },
        { title: 'Simon', image: 'src/assets/brain.webp' },
        { title: 'Paul' },
        { title: 'James' },
        { title: 'Peter' }
      ]
    })

    const incrementIndex = () => {
      state.currentIndex = (state.currentIndex + 1) % state.people.length
    }

    const decrementIndex = () => {
      state.currentIndex = (state.currentIndex - 1 + state.people.length) % state.people.length
    }

    const selectedPage = computed(() => {
      return state.people[state.currentIndex]
    })

    return {
      selectedPage,
      incrementIndex,
      decrementIndex
    }
  }
})
</script>

<style>
.testPage {
  padding: 46px 10px 0px;
}
</style>
