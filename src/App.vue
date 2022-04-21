<template>
  <div class="container">
    <GlobalHeader :currentUser="currentUser"></GlobalHeader>
    <router-view></router-view>
    <GlobalFooter></GlobalFooter>
  </div>
</template>

<script setup lang="ts">

import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import {useColumnsStore} from '@/store/columns'

const {user: currentUser} = storeToRefs(useColumnsStore())
</script>

<style lang="scss" scoped>
</style>
