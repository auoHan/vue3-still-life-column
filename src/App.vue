<template>
  <ColumnList :list="list"></ColumnList>
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import {reactive} from 'vue';
import ColumnList, {ColumnProps} from '@/components/ColumnList.vue';
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
</script>

<style lang="scss" scoped>
</style>
