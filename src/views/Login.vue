<template>
  <ValidateForm @submitForm="submitForm">
    <div class="mb-3">
      <label class="form-label">邮箱地址：</label>
      <ValidateInput v-model="emailValue" :rules="emailRules" placeholder="请输入邮箱地址" type="text"
      ></ValidateInput>
    </div>
    <div class="mb-3">
      <label class="form-label">密码：</label>
      <ValidateInput v-model="passwordValue" :rules="passwordRules" placeholder="请输入密码"
                     type="password"></ValidateInput>
    </div>
    <template #submit>
      <button class="btn btn-primary mb-3 d-grid gap-2 col-1 mx-auto" type="submit">登录</button>
    </template>
  </ValidateForm>
</template>

<script lang='ts' setup>

import ValidateInput, {RulesProp} from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import {useColumnsStore} from '@/store/columns'

const {login} = useColumnsStore()
const emailRules: RulesProp = [
  {type: 'required', message: '电子邮箱地址不能为空'},
  {type: 'email', message: '请输入正确的电子邮箱格式'}
]
const passwordRules: RulesProp = [
  {type: 'required', message: '密码不能为空'}
]
const emailValue = ref(null)
const passwordValue = ref(null)
const router = useRouter()
const submitForm = (result: boolean) => {
  emailValue.value = null
  passwordValue.value = null
  if (result) {
    login()
    router.push('/home')
  }
}

</script>

<style lang="scss" scoped>

</style>
