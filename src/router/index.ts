import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {useColumnsStore} from '@/store/columns'
//const {user} = storeToRefs(useColumnsStore()) // 写在这会报错，原因是pinia只能在运行时使用
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
router.beforeEach((to, from) => {
  // pinia调用需要写在这，使用时调用，这样pinia已经挂载在了全局，不然会显示未定义pinia
  const {user} = storeToRefs(useColumnsStore())
  if (to.name !== 'login' && !user.value.isLogin) {
    return router.push('/login')
  }
})

export default router
