<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle my-2" type="button" @click.prevent="toggleOpen">
      {{ title }}
    </button>

    <ul v-if="isOpen" :style="{display: 'block'}" class="dropdown-menu">
      <li>
        <a class="dropdown-item" href="#">新建文章</a>
      </li>
      <li>
        <a class="dropdown-item" href="#">编辑资料</a>
      </li>
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
