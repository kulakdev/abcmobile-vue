<template>
  <div class="testPageOverlay">
    <div class="testPage">
      <div v-if="selectedPage" class="progressBar">
        <div
          class="innerProgress"
          :style="`width: ` + [(state.currentIndex / state.people.length) * 100] + `%`"
        ></div>
      </div>

      <div v-if="selectedPage" class="question">{{ selectedPage.title }}</div>

      <div v-if="selectedPage.image" class="imageContainer">
        <img :src="selectedPage.image" />
      </div>

      <div v-if="selectedPage.list" class="list" style="width: 100%">
        <div v-for="item in selectedPage.list" v-bind:key="item">
          <div
            name="answer"
            :value="item"
            class="checkbox textWhite"
            :class="{ checkboxActive: state.selectedCell == item }"
            @click="setSelectedCell(item)"
          >
            <div class="round" tabindex="1" :class="{ roundActive: state.selectedCell == item }" />
            <div id="answer" :class="{ checkboxActive: state.selectedCell == item }">
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedPage.numbers" class="numbersWrap">
        <div class="numbersBr"></div>
        <div class="numbers">
          <div
            tabindex="0"
            v-for="(cell, index) in selectedPage.numbers"
            class="numbercell"
            :class="{ numbercellActive: state.selectedCell == cell }"
            :key="index"
            :style="`background-color:` + cell"
            @click="setSelectedCell(cell)"
          >
            {{ cell }}
          </div>
        </div>
      </div>

      <div v-if="selectedPage.grid" class="grid">
        <div
          tabindex="0"
          v-for="(cell, index) in selectedPage.grid"
          class="cell"
          :key="index"
          :style="`background-color:` + cell"
          @click="setSelectedCell(cell)"
        ></div>
      </div>

      <div class="buttonComponent">
        <ButtonComponent text="Next" @click="incrementIndex" :disabled="!state.selectedCell" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { reactive, computed } from 'vue'

export default {
  data() {
    const state = reactive({
      currentIndex: 6,
      answers: [],
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
        },
        {
          title: 'Какой из городов лишний?',
          list: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
        },
        {
          title: 'Выберите правильную фигуру из четырёх пронумерованных.',
          image: 'src/assets/dudes.webp',
          numbers: ['1', '2', '3', '4']
        },
        {
          title: 'Вам привычнее и важнее:',
          list: [
            'Наслаждаться каждой минутой проведенного времени',
            'Быть устремленными мыслями в будущее',
            'Учитывать в ежедневной практике прошлый опыт'
          ]
        },
        {
          title: 'Вставьте подходящее число',
          image: 'src/assets/star.jpg',
          numbers: ['34', '36', '53', '44', '66', '42']
        }
      ]
    })

    const answerStyle = computed(() => {
      return {
        backgroundColor: state.selectedCell ? '#00FF00' : '#FFF'
      }
    })

    const incrementIndex = () => {
      if (state.currentIndex < state.people.length - 1) {
        state.answers.push(state.selectedCell)
        state.currentIndex = state.currentIndex + 1
        state.selectedCell = ''
        console.log(state.answers)
      } else {
        this.$router.push({ path: '/' })
      }
    }

    const selectedPage = computed(() => {
      return state.people[state.currentIndex]
    })

    const setSelectedCell = (index) => {
      state.selectedCell = index
      console.log(state.selectedCell)
    }

    return {
      state,
      selectedPage,
      incrementIndex,
      setSelectedCell,
      answerStyle,
      selectedCell: state.selectedCell
    }
  },
  components: { ButtonComponent }
}
</script>

<style>
.testPage {
  padding: 46px 0px 0px;
  width: 100%;
  height: 100vh;
  font-family: 'PT Serif', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(13, 12, 17, 0.728);
}
.testPageOverlay {
  width: 100%;
  height: 100%;
  background: url('src/assets/space.webp');
}

@media (min-width: 576px) {
  .testPage {
    height: 570px;
  }
}

.progressBar {
  width: 280px;
  height: 11px;

  margin-top: 17px;

  background: #f2f3f3;
  mix-blend-mode: normal;
  opacity: 0.59;
  border-radius: 10.5px;

  box-sizing: border-box;
  display: block;
}

.innerProgress {
  max-width: 100%;
  height: 11px;
  background: #3bde7c;
  border-radius: 10.5px;
}

.question {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
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

.numbersWrap {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
}
.numbers {
  color: black;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.numbersBr {
  width: 320px;
  height: 4px;
  background: #f2f3f3;
  opacity: 0.15;
  margin-bottom: 22px;
  margin-left: auto;
  margin-right: auto;
}

.numbers > img {
  min-width: 185px;
}

.numbercell {
  background-color: #fff;
  width: 41px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.numbercellActive {
  border: 6px solid #ffc700;
}

.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageContainer > img {
  width: 58%;
}

.list {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #ffffff;
}

#answer {
  width: auto;
  height: 100%;
}

.round {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid white;
  margin: 15px;
}

.roundActive {
  border: 1px solid black;
  background-color: #2950c2;
}

.checkbox {
  min-height: 50px;
  height: max-content;
  width: 100%;
  padding: 0px;
  background: rgba(242, 243, 243, 0.15);
  margin: 4px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #fff;
}

.checkboxActive {
  background-color: #ffc700;
  color: black;
}

.checkbox:focus {
  background-color: yellow;
  color: black;
}

.buttonComponent {
  margin-top: 23px;
  margin-bottom: 23px;
}
</style>
