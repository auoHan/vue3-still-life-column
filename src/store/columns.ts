import {testData, testPosts} from '@/utils/testData'
import {UserProps} from '@/components/GlobalHeader.vue'

export const useColumnsStore = defineStore('columns', () => {
  // state
  const columns = reactive(testData)
  const posts = reactive(testPosts)
  const user = reactive<UserProps>({
    isLogin: false
  })
  // getters
  const biggerColumnsLen = () => {
    return columns.filter(column => column.id > 2).length
  }
  const getColumnById = (currentId: number) => {
    return columns.find(c => c.id === currentId)
  }
  const getPostsByCid = (currentId: number) => {
    return posts.filter(post => post.id === currentId)
  }
  // action
  const login = () => {
    user.isLogin = true
    user.name = '李好'
    user.id = 1
  }
  return {columns, posts, user, login, biggerColumnsLen, getColumnById, getPostsByCid}
})
