<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/home">四季专栏</router-link>
    <ul v-if="!currentUser.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link class="btn btn-outline-light my-2" to="/login">登录</router-link>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好！${currentUser.name}`">
          <DropdownItem>
            <router-link class="dropdown-item" to="/create">新建文章</router-link>
          </DropdownItem>
          <DropdownItem disabled>
            <a class="dropdown-item" href="#">编辑资料</a>
          </DropdownItem>
          <DropdownItem>
            <a class="dropdown-item" href="#">退出登录</a>
          </DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts' setup>
import Dropdown from '@/components/Dropdown.vue'
import DropdownItem from '@/components/DropdownItem.vue'
import {UserProps} from '@/store/columns'

const {currentUser} = defineProps<{ currentUser: UserProps }>()
// 解构出来拿到的name是undefined，不知道什么原因，控制台也没打印
//const {isLogin, name, id} = toRefs(currentUser) // 这样解构才是响应式的，{currentUser:{isLogin, name, id}}这样不是响应式的
</script>

<style lang="scss" scoped>

</style>
