<script setup lang="ts">
import Button from '@/components/global/Button.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import {
  AngleLeft,
} from '@vicons/fa'
import { Icon } from '@vicons/utils'

let list = reactive([
  { label: '列表1' },
  { label: '列表2' },
  { label: '列表3' },
  { label: '列表4' },
  { label: '列表5' },
  { label: '列表6' },
])
const dragIndex = ref(0)

const dragStart = (index: number) => {
  dragIndex.value = index
}
const dragEnter = (e: DragEvent, index: number) => {
  e.preventDefault()
  // 避免源对象触发自身的dragenter事件
  if (dragIndex.value !== index) {
    const source = list[dragIndex.value]
    list.splice(dragIndex.value, 1)
    list.splice(index, 0, source)
    // 排序变化后目标对象的索引变成源对象的索引
    dragIndex.value = index
  }
}
const dragover = (e: DragEvent) => {
  e.preventDefault()
}

const router = useRouter()
const back = () => {
  router.push({
    path: '/',
  })
}
</script>

<template>
  <section class="main">拖拽页面</section>
          <Button
          width="58px"
          height="58px"
          backgroundColor="#f1f3f6"
          @click="back"
          style="margin: auto;"
        >
          <Icon color="#acb8e9" size="32">
            <AngleLeft />
          </Icon>
        </Button>
  <transition-group name="drag" class="list" tag="ul">
    <Button
      v-for="(item, index) in list"
      :key="index"
      draggable="true"
      class="list-item"
      @dragstart="dragStart(index)"
      @dragenter="dragEnter($event, index)"
      @dragover="dragover($event)"
      >{{ item.label }}</Button
    >
  </transition-group>
</template>

<style scoped lang="scss">
.list {
  list-style: none;
  margin-top: 30px;

  .list-item {
    cursor: move;
    width: 300px;
    border-radius: 4px;
    color: #000;
    margin: auto;
    margin-bottom: 18px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .list-complete-item {
    transition: all 0.8s ease;
    display: inline-block;
    margin-right: 10px;
  }

  .list-complete-enter-from,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }
}
</style>
