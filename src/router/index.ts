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
    component: () => import('@/views/Login.vue'),
    meta: {redirectAlreadyLogin: true}
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import('@/views/ColumnDetail.vue'), // 注意这里要带上 文件后缀.vue
    meta: {requiresAuth: true}
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/CreatePosts.vue'), // 注意这里要带上 文件后缀.vue
    meta: {requiresAuth: true}
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from) => {
  // pinia调用需要写在这，使用时调用，这样pinia已经挂载在了全局，不然会显示未定义pinia
  const {user} = storeToRefs(useColumnsStore())
  // 此路由需要授权，请检查是否已登录
  // 如果没有，则重定向到登录页面
  if (to.meta.requiresAuth && !user.value.isLogin) {
    // return之后不需要再写next，详情看官方文档
    return {
      name: 'login',
    }
  } else if (to.meta.redirectAlreadyLogin && user.value.isLogin) {
    // 已登录再去login页面跳转到home页面
    return {
      path: '/home'
    }
  }
})

export default router
