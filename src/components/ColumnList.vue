<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-light">{{ column.description }}</p>
          <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ColumnProps} from '@/utils/testData'

const {list} = withDefaults(defineProps<{ list: ColumnProps[] }>(), {
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
