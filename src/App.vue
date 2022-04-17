<template>
  <div class="container">
    <GlobalHeader :currentUser="currentUser"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script setup lang="ts">

import {reactive} from 'vue'
import ColumnList, {ColumnProps} from '@/components/ColumnList.vue'
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue'

const list = reactive<ColumnProps[]>([
  {
    id: 1,
    title: '标题1',
    avatar: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png',
    description: '描述1'
  },
  {
    id: 2,
    title: '标题2',
    //avatar: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png',
    description: '描述2'
  }
])
const currentUser = reactive<UserProps>(
  {
    isLogin: true,
    name: 'kd',
    id: 1
  }
)
console.log(currentUser)
</script>

<style lang="scss" scoped>
</style>
