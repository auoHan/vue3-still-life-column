<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag!=='textarea'"
      v-model="newValue"
      :class="{'is-invalid': error}"
      class="form-control"
      v-bind="$attrs"
      @blur="validateInput">
    <textarea
      v-else
      v-model="newValue"
      :class="{'is-invalid': error}"
      class="form-control"
      v-bind="$attrs"
      @blur="validateInput"
    />
    <span v-if="error" class="invalid-feedback">
      {{ message }}
    </span>
  </div>
</template>

<script lang='ts' setup>

import {emitter} from '@/utils/emitter'

const emailReg = /^[a-zA-Z\d][\w-]*[a-zA-Z\d]@[a-zA-Z\d][\w-]*[a-zA-Z\d]\.[a-zA-Z]+[a-zA-Z]$/

// const passwordReg = /^[a-zA-Z]w{5,17}$/
interface RuleProp {
  type: 'required' | 'email',
  message: string
}

export type RulesProp = RuleProp[]
export type TagType = 'input' | 'textarea'


// 获取父组件的参数
const props = defineProps<{ // 此处要写props，解构出来不是响应式的
  rules: RulesProp,
  modelValue: string,
  tag: TagType
}>()
// 发送事件
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const inputRef = reactive({
  error: false,
  message: ''
})
const newValue = computed({
  get: () => props.modelValue || '',
  set: (value) => {
    emit('update:modelValue', value)
  }
})
const {error, message} = toRefs(inputRef)
// 表单校验
const validateInput = () => {
  if (props.rules) {
    const allPassed = props.rules.every(rule => {
      let passed = true
      inputRef.message = rule.message
      switch (rule.type) {
        case 'required':
          passed = newValue.value.trim() !== ''
          break
        case 'email':
          passed = emailReg.test(newValue.value)
          break
        default:
          break
      }
      return passed
    })
    inputRef.error = !allPassed
    return allPassed
  }
  return true
}
onMounted(() => {
  emitter.emit('formItemCreated', validateInput)
})

</script>
<script lang="ts">
// 使用一个简单的 <script> to declare options
export default {
  // 禁用 Attribute 继承
  inheritAttrs: false
}
</script>
<style lang="scss" scoped>

</style>
