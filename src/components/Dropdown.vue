<template>
  <div class="dropdown">
    <a class="btn btn-primary dropdown-toggle my-2" href="#" @click.prevent="toggleOpen">
      {{ title }}
    </a>

    <ul v-if="isOpen" :style="{display: 'block'}" class="dropdown-menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue'

const {title} = defineProps<{ title: string }>()
const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>

</style>
