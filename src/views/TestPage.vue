<template>
  <div class="testPage">
    <div v-if="selectedPage">{{ selectedPage.title }}</div>

    <div v-if="selectedPage.list">
      <div v-for="item in selectedPage.list" v-bind:key="item" class="checkbox">
        <input type="radio" id="answers" v-model="radioValue" />
        <label for="answers" class="textWhite">{{ item }}</label>
      </div>
    </div>

    <div>poggers</div>
    <div v-if="selectedPage.image">
      <img style="width: 100px" :src="selectedPage.image" />
    </div>
    <ButtonComponent text="Next" @click="incrementIndex" :disabled="!radioValue" />
  </div>
</template>

<script lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      currentIndex: 0,
      radioValue: '',
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
      decrementIndex,
      radioValue: state.radioValue
    }
  },
  components: { ButtonComponent }
})
</script>

<style>
.testPage {
  padding: 46px 10px 0px;
}

.checkbox {
  height: 50px;
  width: 100%;
  padding: 0px;
  background: rgba(242, 243, 243, 0.15);
  margin: 4px 0;

  color: #fff;
}
</style>
