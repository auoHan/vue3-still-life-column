<template>
  <div ref="dropdownRef" class="dropdown">
    <a class="btn btn-primary dropdown-toggle my-2" href="#" @click.prevent="toggleOpen">
      {{ title }}
    </a>

    <ul v-if="isOpen" :style="{display: 'block'}" class="dropdown-menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts' setup>
import {ref, watch} from 'vue'
import {useClickOutside} from '@/hooks/useClickOutside'

const {title} = defineProps<{ title: string }>()
const isOpen = ref(false)
const dropdownRef = ref<null | HTMLElement>(null)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
// 点击隐藏事件，加入hooks
const isClickOutside = useClickOutside(dropdownRef)
// 使用监听事件，解决渲染时只改变一次的问题
watch(isClickOutside, () => {
  if (isOpen.value && isClickOutside.value) {
    isOpen.value = false
  }
})
console.log(isOpen.value)
</script>

<style lang="scss" scoped>

</style>
