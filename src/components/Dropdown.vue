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
import {onMounted, onUnmounted, ref} from 'vue'

const {title} = defineProps<{ title: string }>()
const isOpen = ref(false)
const dropdownRef = ref<null | HTMLElement>(null)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
// 点击隐藏事件
const handler = (e: MouseEvent) => {
  if (dropdownRef.value) {
    // contains判断传入的节点是否为该节点的后代节点
    if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
      isOpen.value = false
    }
  }
}
onMounted(() => {
  document.addEventListener('click', handler)
})
onUnmounted(() => {
  document.removeEventListener('click', handler)
})
</script>

<style lang="scss" scoped>

</style>
