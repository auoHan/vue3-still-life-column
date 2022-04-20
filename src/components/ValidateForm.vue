<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button class="btn btn-primary" type="submit">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts' setup>
const emit = defineEmits<{
  (e: 'submitForm', value: boolean): void
}>()
const submitForm = () => {
  emit('submitForm', true)
}
</script>

<style lang="scss" scoped>

</style>
