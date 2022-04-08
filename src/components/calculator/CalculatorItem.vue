<script setup lang="ts">
import Backspace from '@vicons/fa/Backspace'
import { Icon } from '@vicons/utils'

import { ref, useAttrs } from 'vue'
let { val, show } = defineProps<{
  val: string
  show: string
}>()
let attrs = useAttrs()
let itemWidth = attrs?.width ?? '18.116vw'
let itemWidthPC = attrs?.width ?? '75px'
let itemTextColor = attrs?.textColor ?? '#000'
let itemFontSize = attrs?.fontSize ?? '16px'
let itemBackgroundColor = attrs?.backgroundColor ?? '#f1f3f6'
let itemIsIcon: boolean = (attrs?.isIcon as boolean) ?? false

const Myemit = defineEmits(['btnTrigger'])
const clickMySelf = (val: string) => {
  Myemit('btnTrigger', val)
}

let isBig = ref(false)
const mousedown = () => {
  isBig.value = true
}
const mouseup = () => {
  isBig.value = false
}
</script>

<template>
  <section class="CalculatorItem">
    <div
      :class="{ item: true, big: isBig }"
      @click="clickMySelf(val)"
      @mousedown="mousedown"
      @mouseup="mouseup"
    >
      <div v-if="itemIsIcon">
        <Icon color="#5250bf" size="32" v-if="show === 'Backspace'">
          <Backspace />
        </Icon>
      </div>
      <div v-else>
        {{ show }}
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.item {
  width: v-bind('itemWidth');
  color: v-bind('itemTextColor');
  font-size: v-bind('itemFontSize');
  height: 18.116vw;
  box-shadow: 7px 7px 14px #dee0e2, -7px -7px 14px #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.15s;
  transform: scale(1);
  background-color: v-bind('itemBackgroundColor');
}
.big {
  transform: scale(1.2);
}

@media screen and (min-width: 415px) {
  .item {
    width: v-bind('itemWidthPC');
    height: 75px;
  }
}
</style>
