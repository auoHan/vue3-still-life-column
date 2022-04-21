import {testData, testPosts} from '@/utils/testData'
import {UserProps} from '@/components/GlobalHeader.vue'

export const useColumnsStore = defineStore('columns', () => {
  const columns = reactive(testData)
  const posts = reactive(testPosts)
  const user = reactive<UserProps>({
    isLogin: false
  })
  const login = () => {
    user.isLogin = true
    user.name = '李好'
    user.id = 1
  }
  return {columns, posts, user, login}
})
