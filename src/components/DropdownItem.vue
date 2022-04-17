<template>
  <li :class="{'is-disabled': disabled}" class="dropdown-option">
    <slot></slot>
  </li>
</template>

<script lang='ts' setup>
// disabled为ture时不可点击
const {disabled = false} = defineProps<{ disabled: boolean }>()
</script>

<style lang="scss">
.dropdown-option.is-disabled {
  * {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
  }
}
</style>
