<template>
  <div class="create-post-page">
    <h4>{{ isEditMode ? '编辑文章' : '新建文章' }}</h4>
    <ValidateForm @submitForm="submitForm">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <ValidateInput
          v-model="titleValue" :rules="titleRules"
          placeholder="请输入文章标题"
          type="text"
          tag="input"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <ValidateInput
          v-model="contentValue"
          :rules="contentRules"
          placeholder="请输入文章详情"
          rows="10"
          tag="textarea"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">{{ isEditMode ? '更新文章' : '发表文章' }}
        </button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang='ts' setup>

import ValidateInput, {RulesProp} from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import {useColumnsStore} from '@/store/columns'
import {PostProps} from '@/utils/testData'

const router = useRouter()
const {user} = storeToRefs(useColumnsStore())
const {createPost} = useColumnsStore()
const titleRules: RulesProp = [
  {type: 'required', message: '文章标题不能为空'}
]
const contentRules: RulesProp = [
  {type: 'required', message: '文章详情不能为空'}
]
const titleValue = ref('')
const contentValue = ref('')
const isEditMode = ref(false)
const submitForm = (result: boolean) => {
  if (result) {
    const columnId = user.value.columnId
    if (columnId) {
      const newPost: PostProps = {
        id: 5,
        title: titleValue.value,
        content: contentValue.value,
        createdAt: '2022-01-01',
        columnId
      }
      createPost(newPost)
      router.push({name: 'column', params: {id: columnId}})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
