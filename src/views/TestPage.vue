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
        tabindex="0"
        v-for="(cell, index) in selectedPage.grid"
        class="cell"
        :key="index"
        :style="`background-color:` + cell"
        @click="setSelectedCell(index)"
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
      selectedCell: '',
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
          grid: ['gray', 'blue', 'green', 'orangered', 'yellow', 'brown', 'black', 'purple', 'teal']
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

    const setSelectedCell = (index) => {
      state.selectedCell = index
      console.log(state.selectedCell)
    }

    return {
      selectedPage,
      incrementIndex,
      decrementIndex,
      setSelectedCell,
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.question {
  font-size: 20;
}

.grid {
  margin-left: auto;
  margin-right: auto;

  max-width: 299px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 81px);
  grid-gap: 12px;
}

.cell {
  border: 3px solid rgba(0, 0, 0, 0);
  width: 75px;
  height: 75px;
}

.cell:focus {
  border: 6px solid yellow;
}

.invisible-radio {
  border: 6px solid yellow;
  /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  outline: none; */
}

.active {
  border: 6px solid yellow;
}

.passive {
  border: 6px solid green;
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
