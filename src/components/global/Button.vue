<script setup lang="ts">
import { useAttrs } from 'vue'

let attrs = useAttrs()
let Width = attrs?.width ?? '100px'
let Height = attrs?.height ?? '100px'
let TextColor = attrs?.textColor ?? '#000'
let FontSize = attrs?.fontSize ?? '16px'
let BackgroundColor = attrs?.backgroundColor ?? '#fafafa'
let BoxShadow = attrs?.boxShadow ?? '7px 7px 14px #dee0e2, -7px -7px 14px #ffffff'
let BorderRadius = attrs?.borderRadius ?? '8px'

</script>

<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.button {
  width: v-bind('Width');
  height: v-bind('Height');
  color: v-bind('TextColor');
  font-size: v-bind('FontSize');
  background-color: v-bind('BackgroundColor');
  box-shadow: v-bind('BoxShadow');
  border-radius: v-bind('BorderRadius');
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transition: all .5s;
  transform: scale(1);
}
.button:hover {
  transform: scale(1.1);
}
</style>
