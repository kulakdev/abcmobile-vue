<template>
  <div>
    <div v-if="selectedPage">{{ selectedPage.title }}</div>
    <ul v-if="selectedPage.list">
      <div class="checkbox">
        <radio v-for="item in selectedPage.list" v-bind:key="item">{{ selectedPage.list }}</radio>
      </div>
    </ul>
    <a @click="incrementIndex">Next</a>
    <a @click="decrementIndex">Previous</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      people: [
        { title: 'John', list: ['one', 'two'] },
        { title: 'Simon' },
        { title: 'Paul' },
        { title: 'James' }
      ],
      currentIndex: 0
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
