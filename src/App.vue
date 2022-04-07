<script setup lang="ts">
import { computed, ref } from 'vue'
import CalculatorItem from './components/CalculatorItem.vue'

let globalCss = {
  backgroundColor: '#f1f3f6',
  resultBackgroundColor: '#eff1f3',
}

let result = ref(`:)`)

let firstNum = computed(() => {
  let res = 0
  let reg = /[\+\-\*/%]/
  if (reg.test(result.value)) {
    let _O = result.value.split(result.value.match(reg)![0])[0]
    if (/[.]/.test(_O)) {
      // _O.split('.')[1].length
      res = parseFloat(_O)
    } else {
      res = parseInt(_O)
    }
  } else {
    res = parseInt(result.value)
  }
  return res
})

let secondtNum = computed(() => {
  let res = 0
  let reg = /[\+\-\*/%]/
  if (reg.test(result.value)) {
    let _O = result.value.split(result.value.match(reg)![0])[1]
    if (/[.]/.test(_O)) {
      // _O.split('.')[1].length
      res = parseFloat(_O)
    } else {
      res = parseInt(_O)
    }
  } else {
    res = 0
  }
  return res
})

const btnTrigger = (val: string) => {
  if (result.value === ':)') result.value = ''
  if (val === '0') {
    if (result.value === '0') {
      return false
    } else {
      result.value += '0'
      return false
    }
  }
  if (val === 'clear') {
    // 清除
    result.value = ':)'
  } else if (val === 'divide') {
    // 除以
    equal()
    if (/[0-9]$/.test(result.value.charAt(result.value.length - 1))) {
      result.value += '/'
    } else {
      alert('连续出现运算符')
    }
  } else if (val === 'multiply') {
    // 乘
    equal()

    if (/[0-9]$/.test(result.value.charAt(result.value.length - 1))) {
      result.value += '*'
    } else {
      alert('连续出现运算符')
    }
  } else if (val === 'add') {
    // 加
    equal()

    if (/[0-9]$/.test(result.value.charAt(result.value.length - 1))) {
      result.value += '+'
    } else {
      alert('连续出现运算符')
    }
  } else if (val === 'reduce') {
    // 减
    equal()

    if (/[0-9]$/.test(result.value.charAt(result.value.length - 1))) {
      result.value += '-'
    } else {
      alert('连续出现运算符')
    }
  } else if (val === 'remainder') {
    // 取余
    equal()
    if (/[0-9]$/.test(result.value.charAt(result.value.length - 1))) {
      result.value += '%'
    } else {
      alert('连续出现运算符')
    }
  } else if (val === 'delete') {
    if (result.value.length >= 1 && result.value !== ':)') {
      result.value = result.value.substring(0, result.value.length - 1)
    } else {
      alert('已经没有啦,不能再删除了')
      result.value = ':)'
    }
  } else if (val === 'point') {
    if (
      /[0-9]$/.test(result.value.charAt(result.value.length - 1)) &&
      !/[.]/.test(result.value)
    ) {
      result.value += '.'
    } else if ((result.value = '0')) {
      result.value += '.'
    }
  } else if (val === 'equal') {
    equal()
  } else {
    result.value += val
  }
}

const equal = () => {
  // 等于
  if (result.value === '') {
    result.value = '0'
    return false
  } else if (
    /[0-9]$/.test(result.value.charAt(result.value.length - 1)) &&
    /[\+\-\*/%]/.test(result.value)
  ) {
    let rule = result.value.match(/[\+\-\*/%]/)![0]
    if (rule === '/') {
      result.value = (firstNum.value / secondtNum.value).toString()
    } else if (rule === '*') {
      result.value = (firstNum.value * secondtNum.value).toString()
    } else if (rule === '+') {
      result.value = (firstNum.value + secondtNum.value).toString()
    } else if (rule === '-') {
      result.value = (firstNum.value - secondtNum.value).toString()
    } else if (rule === '%') {
      result.value = (firstNum.value % secondtNum.value).toString()
    }
  }
}
</script>

<template>
  <div class="calculator-main">
    <header class="result-container">
      {{ result }}
    </header>
    <main class="main">
      <div class="row">
        <CalculatorItem
          val="clear"
          show="AC"
          @btnTrigger="btnTrigger"
          textColor="#d63543"
        ></CalculatorItem>
        <CalculatorItem
          val="divide"
          show="÷"
          @btnTrigger="btnTrigger"
          fontSize="20px"
        ></CalculatorItem>
        <CalculatorItem
          val="multiply"
          show="×"
          @btnTrigger="btnTrigger"
          fontSize="20px"
        ></CalculatorItem>
        <CalculatorItem
          val="delete"
          show="Backspace"
          @btnTrigger="btnTrigger"
          isIcon="true"
        ></CalculatorItem>
      </div>
      <div class="row">
        <CalculatorItem
          val="7"
          show="7"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="8"
          show="8"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="9"
          show="9"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="reduce"
          show="-"
          @btnTrigger="btnTrigger"
          fontSize="24px"
        ></CalculatorItem>
      </div>
      <div class="row">
        <CalculatorItem
          val="4"
          show="4"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="5"
          show="5"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="6"
          show="6"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="add"
          show="+"
          @btnTrigger="btnTrigger"
          fontSize="20px"
        ></CalculatorItem>
      </div>
      <div class="row">
        <CalculatorItem
          val="1"
          show="1"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="2"
          show="2"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="3"
          show="3"
          @btnTrigger="btnTrigger"
        ></CalculatorItem>
        <CalculatorItem
          val="remainder"
          show="%"
          @btnTrigger="btnTrigger"
          fontSize="20px"
        ></CalculatorItem>
      </div>
      <div class="row">
        <div class="child-row">
          <CalculatorItem
            val="0"
            show="0"
            width="100%"
            @btnTrigger="btnTrigger"
          ></CalculatorItem>
        </div>
        <div class="child-row">
          <CalculatorItem
            val="point"
            show="."
            @btnTrigger="btnTrigger"
            fontSize="20px"
          ></CalculatorItem>
          <CalculatorItem
            val="equal"
            show="="
            @btnTrigger="btnTrigger"
            backgroundColor="#606dfa"
            textColor="#e4f5fe"
            fontSize="24px"
          ></CalculatorItem>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.calculator-main {
  width: 100%;
  margin: auto;
  background-color: v-bind('globalCss.backgroundColor');
  box-sizing: border-box;
  padding: 18px 28px;
  min-height: 100vh;
}

.result-container {
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  word-break: break-all;
  padding: 8px 10px;
  text-align: right;
  border-radius: 8px;
  background: linear-gradient(145deg, #eff1f3, #f6fafb);
  box-shadow: 6px 6px 18px #c6c7ca, -6px -6px 18px #ffffff;
  font-size: 24px;
  font-weight: bold;
}

.main .row {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;

  &:last-child .child-row {
    width: 50%;

    &:last-child {
      margin-left: 5.35vw;
      display: flex;
      justify-content: space-between;
    }
  }
}
@media screen and (min-width: 415px) {
  .calculator-main {
    width: 414px;
  }
  .main .row {
    &:last-child .child-row {
      &:last-child {
        margin-left: 20px;
      }
    }
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
