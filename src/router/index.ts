import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import('@/views/ColumnDetail.vue') // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/CreatePosts.vue') // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
