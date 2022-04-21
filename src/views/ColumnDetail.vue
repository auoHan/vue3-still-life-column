<template>
  <div class="column-detail-page w-75 mx-auto">
    <div v-if="column" class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :alt="column.title" :src="column.avatar && column.avatar.fitUrl" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <PostList :list="list"></PostList>
  </div>
</template>

<script lang='ts' setup>

import {useColumnsStore} from '@/store/columns'
import PostList from '@/components/PostList.vue'

const route = useRoute()
const {getColumnById, getPostsByCid} = useColumnsStore()
const currentId = +route.params.id // string类型转换为number类型
const column = getColumnById(currentId)
const list = getPostsByCid(currentId)
</script>

<style lang="scss" scoped>

</style>
