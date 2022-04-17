<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-light">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed} from 'vue'

export interface ColumnProps {
  id: number,
  title: string,
  avatar?: string,
  description: string
}

interface Props {
  list: ColumnProps[]
}

const {
  list
} = withDefaults(defineProps<Props>(), {
  list: () => [
    {
      id: 1,
      title: '标题',
      avatar: '头像',
      description: '描述'
    }
  ]
})
const columnList = computed(() => {
  return list.map(column => {
    if (!column.avatar) {
      // 动态引入图片 使用到new URL import.meta.url
      column.avatar = new URL(`../assets/image/column.jpg`, import.meta.url).href
    }
    return column
  })
})

</script>

<style lang="scss" scoped>
</style>
