<template>
  <button ref="m">test</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

let m = ref<HTMLButtonElement>()

console.log(HTMLButtonElement.prototype)
interface HTMLButtonElement {
  [x: string]: any
}
;(HTMLButtonElement.prototype as HTMLButtonElement).test = () => {
  console.log('hhh')
}
onMounted(() => {
  m.value!.test()
})
interface I123 {
  [propName: string]: any
  x:string
}
let a:I123 = {
  x:'123'
}
a.name = '123'

</script>
