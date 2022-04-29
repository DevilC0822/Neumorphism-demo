<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'

let props = defineProps<{
  currentTime: number
  totalTime: number
}>()
console.log(props)
let { currentTime, totalTime } = toRefs(props)

let proportion = ref('0%')
watch(currentTime, (newValue) => {
  proportion.value = `${(newValue / totalTime.value) * 100}%`
})
</script>

<template>
  <div class="progress"></div>
</template>

<style scoped lang="scss">
.progress {
  position: relative;
  height: 5px;
  margin: 0 30px;
  border-radius: 5px;
  background: #d7e3ef;
  box-shadow: inset 1px 1px 4px #dee0e2, inset -1px -1px 4px #ffffff;
  margin-top: 45px;
}
.progress::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: v-bind('proportion');
  height: 5px;
  border-radius: 5px;
  background: linear-gradient(145deg, #a9b5e7, #d2d7fd);
  box-shadow: 1px 1px 4px #dee0e2, -1px -1px 4px #ffffff;
}
.progress::after {
  position: absolute;
  content: '';
  top: 50%;
  left: v-bind('proportion');
  transform: translate(-40%, -50%);
  width: 15px;
  height: 15px;
  border-radius: 20px;
  background: linear-gradient(145deg, #a9b5e7, #d2d7fd);
  box-shadow: 3px 3px 6px #dee0e2, -3px -3px 6px #ffffff;
  cursor: pointer;
}
</style>
