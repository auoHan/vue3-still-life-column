import {ColumnProps, PostProps, testData, testPosts} from '@/utils/testData'
import {PersistOptions} from 'pinia-plugin-persist'

export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number,
  columnId?: number
}

// setup写法
const storeSetup = () => {
  // state
  const columns = reactive<ColumnProps[]>(testData)
  const posts = reactive<PostProps[]>(testPosts)
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
    user.columnId = 5
  }
  const createPost = (newPost: PostProps) => {
    posts.push(newPost)
  }
  return {columns, posts, user, login, biggerColumnsLen, getColumnById, getPostsByCid, createPost}
}
// 实现持久化缓存
const storePersist: PersistOptions = {enabled: true, strategies: [{storage: localStorage}]}
export const useColumnsStore = defineStore('columns', storeSetup, {persist: storePersist})
