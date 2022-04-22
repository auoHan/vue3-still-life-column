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

import ValidateInput from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'

const submitForm = (result: boolean) => {}
const titleRules = []
const contentRules = []
const titleValue = ref(null)
const contentValue = ref(null)
const isEditMode = ref(false)
</script>

<style lang="scss" scoped>

</style>
