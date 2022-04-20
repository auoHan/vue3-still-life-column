<template>
  <div class="container">
    <GlobalHeader :currentUser="currentUser"></GlobalHeader>
    <!--<ColumnList :list="list"></ColumnList>-->
    <ValidateForm @submitForm="submitForm">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput v-model="emailValue" :rules="emailRules" placeholder="请输入邮箱地址" type="text"></ValidateInput>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput v-model="passwordValue" :rules="passwordRules" placeholder="请输入密码"
                       type="password"></ValidateInput>
      </div>
      <template #submit>
        <button class="btn btn-danger" type="submit">登录</button>
      </template>
    </ValidateForm>
  </div>
</template>

<script setup lang="ts">

import {ColumnProps} from '@/components/ColumnList.vue'
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue'
import ValidateInput, {RulesProp} from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'

const list = reactive<ColumnProps[]>([
  {
    id: 1,
    title: '标题1',
    avatar: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png',
    description: '描述1'
  },
  {
    id: 2,
    title: '标题2',
    //avatar: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png',
    description: '描述2'
  }
])
const currentUser = reactive<UserProps>(
  {
    isLogin: true,
    name: 'kd',
    id: 1
  }
)
const emailRules: RulesProp = [
  {type: 'required', message: '电子邮箱地址不能为空'},
  {type: 'email', message: '请输入正确的电子邮箱格式'}
]
const passwordRules: RulesProp = [
  {type: 'required', message: '密码不能为空'},
  {type: 'password', message: '请输入正确的密码格式(以字母开头，长度在6-18之间)'}
]
const emailValue = ref(null)
const submitForm = (value: boolean) => {
  console.log(value)
}
</script>

<style lang="scss" scoped>
</style>
