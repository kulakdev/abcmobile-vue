<template>
  <div class="testPage">
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
          <div id="answer" :class="{ checkboxActive: state.selectedCell == item }">{{ item }}</div>
        </div>
      </div>
    </div>

    <div v-if="selectedPage.numbers" class="numbers">
      <div class="numbdersBr" />
      <div
        tabindex="0"
        v-for="(cell, index) in selectedPage.numbers"
        class="numbercell"
        :class="{ numbercellActive: state.selectedCell == index }"
        :key="index"
        :style="`background-color:` + cell"
        @click="setSelectedCell(index)"
      >
        {{ cell }}
      </div>
    </div>

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

    <div class="buttonComponent">
      <ButtonComponent text="Next" @click="incrementIndex" :disabled="!state.selectedCell" />
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { reactive, computed } from 'vue'

export default {
  data() {
    const state = reactive({
      currentIndex: 0,
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
  padding: 46px 10px 0px;
  width: 100%;
  height: 570px;
  font-family: 'PT Serif', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 576px) {
  .testpage {
    height: 570px;
  }
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

.numbers {
  color: black;
  display: flex;
  width: 100%;
}

.numbersBr {
  width: 320px;
  height: 4px;
  background: #f2f3f3;
  opacity: 0.15;
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
  margin: 0 15px;
}

.numbercellActive {
  border: 6px solid yellow;
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

.circlebutton
.circlebuttonactive: {
  background: #2950c2;
  border: 1px solid #272727;
}

#answer {
  width: auto;
  height: 100%;
}

.round {
  width: 20px;
  height: 20px;
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
