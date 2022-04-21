import {testData, testPosts} from '@/utils/testData'
import {UserProps} from '@/components/GlobalHeader.vue'

export const useColumnsStore = defineStore('columns', () => {
  const columns = reactive(testData)
  const posts = reactive(testPosts)
  const user = reactive<UserProps>({
    isLogin: false
  })
  return {columns, posts, user}
})
