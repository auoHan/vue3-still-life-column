<template>
  <li :class="{'is-disabled': disabled}" class="dropdown-option">
    <slot></slot>
  </li>
</template>

<script lang='ts' setup>
const {disabled = false} = defineProps<{ disabled: boolean }>()
console.log(disabled)
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
