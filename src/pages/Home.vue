<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '@/components/global/Button.vue'

const router = useRouter()
const toCalculator = () => {
  router.push({
    path: './calculator',
  })
}
const toPlayer = () => {
  router.push({
    path: './music-player',
  })
}
const toDrag = () => {
  router.push({
    path: './drag',
  })
}
</script>

<template>
  <section class="Home">
    <br />
    <br />
    <Button @click="toCalculator">计算器</Button>
    <br />
    <br />
    <br />
    <Button @click="toPlayer">音乐播放器</Button>
    <br />
    <br />
    <Button @click="toDrag">拖拽</Button>
  </section>
</template>

<style scoped lang="scss">
.Home {
  background-color: #fafafa;
  min-height: 100vh;
  .button {
    margin: auto;
  }
}
</style>
