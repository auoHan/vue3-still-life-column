<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img alt="callout" class="w-50" src="../assets/svg/callout.svg"/>
          <h2 class="fw-light">随心写作，自由表达</h2>
          <p>
            <a class="btn btn-primary my-2" href="#">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="fw-bold text-center">发现精彩</h4>
    <ColumnList :list="list"></ColumnList>
    <button v-if="!isLastPage" class="btn btn-outline-primary d-grid gap-2 col-2 mx-auto mt-2 mb-5"
            @click="loadMorePage">加载更多
    </button>
  </div>

</template>

<script lang='ts' setup>

import ColumnList from '@/components/ColumnList.vue'
import {useColumnsStore} from '@/store/columns'

const {columns: list} = storeToRefs(useColumnsStore()) // 解构出来并设置别名
const {biggerColumnsLen} = useColumnsStore()
console.log(biggerColumnsLen())
const isLastPage = ref(false)
const loadMorePage = () => {
  console.log('loadMorePage')
}
</script>

<style lang="scss" scoped>

</style>
