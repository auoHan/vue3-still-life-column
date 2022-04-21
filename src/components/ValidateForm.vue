<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button class="btn btn-primary mb-3 d-grid gap-2 col-1 mx-auto" type="submit">登录</button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts' setup>
import {emitter, ValidateFunc} from '@/utils/emitter'

const emit = defineEmits<{
  (e: 'submitForm', value: boolean): void
}>()
let funcArr: ValidateFunc[] = []
const submitForm = () => {
  // 由于every 只要监听到有false就会停止循环，所以需要用map先全部循环一遍再every，这样才会触发所有message
  const result = funcArr.map(func => func()).every(result => result)
  emit('submitForm', result)
}
const callback = (func: ValidateFunc) => {
  funcArr.push(func)
}
emitter.on('formItemCreated', callback)
onUnmounted(() => {
  emitter.off('formItemCreated', callback)
  funcArr = []
})
</script>

<style lang="scss" scoped>

</style>
