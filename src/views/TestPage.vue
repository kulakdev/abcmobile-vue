<template>
  <div class="testPage">
    <div v-if="selectedPage" class="question">{{ selectedPage.title }}</div>

    <div v-if="selectedPage.list">
      <div v-for="item in selectedPage.list" v-bind:key="item" class="checkbox">
        <input name="answer" type="radio" id="item" :value="item" v-model="radioValue" />
        <label for="answers" class="textWhite">{{ item }}</label>
      </div>
    </div>

    <div v-if="selectedPage.image">
      <img style="width: 100px" :src="selectedPage.image" />
    </div>
    <ButtonComponent text="Next" @click="incrementIndex" :disabled="!radioValue" />

    <div v-if="selectedPage.grid" class="grid">
      <div
        v-for="cell in selectedPage.grid"
        class="cell"
        :key="cell"
        :style="`background-color:` + cell"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { reactive, computed } from 'vue'

export default {
  data() {
    const state = reactive({
      currentIndex: 4,
      radioValue: '',
      people: [
        { title: 'Ваш пол:', list: ['Мужчина', 'Женщина'] },
        {
          title: 'Укажите ваш возраст',
          list: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'],
          image: 'src/assets/brain.webp'
        },
        { title: 'Выбери лишнее:', list: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'] },
        {
          title: 'Продолжите числовой ряд: 18  20  24  32',
          list: ['62', '48', '74', '57', '60', '77']
        },
        {
          title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
          grid: [
            ' gray',
            'blue',
            'green',
            'orangered',
            'yellow',
            'brown',
            'black',
            'purple',
            'teal'
          ]
        }
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
}
</script>

<style>
.testPage {
  padding: 46px 10px 0px;
  font-family: 'PT Serif', serif;
}
.question {
  font-size: 20;
}

.grid {
  max-width: 299px;
  display: flex;
  flex-wrap: wrap;
}

.cell {
  margin: 12px;
  width: 75px;
  height: 75px;
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
