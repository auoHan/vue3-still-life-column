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

import {testData, testPosts} from '@/utils/testData'
import PostList from '@/components/PostList.vue'

const route = useRoute()
const currentId = +route.params.id // string类型转换为number类型
const column = testData.find(c => c.id === currentId)
const list = testPosts.filter(post => post.id === currentId)
</script>

<style lang="scss" scoped>

</style>
