<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">四季专栏</a>
    <ul v-if="!isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好！${name}`"></Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts' setup>
import {toRefs} from 'vue'
import Dropdown from '@/components/Dropdown.vue'

export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number
}

const {currentUser} = defineProps<{ currentUser: UserProps }>()
const {isLogin, name, id} = toRefs(currentUser) // 这样解构才是响应式的，{currentUser:{isLogin, name, id}}这样不是响应式的
</script>

<style lang="scss" scoped>

</style>
