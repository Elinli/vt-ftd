<template>
  <div class="common-layout">
    <el-container>
      <Header />
      <el-container>
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <Aside />
        <el-main>
          <div class="page-router-view"> <router-view /> </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { watchEffect, toRaw } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import Header from './Header.vue'
  import Aside from './Aside.vue'

  const route = useRoute()
  const router = useRouter()

  watchEffect(() => {
    console.log('route', toRaw(route))
    console.log('router', toRaw(router).currentRoute.value.path)
    console.log('watchEffect')
  })
</script>

<style scoped lang="scss">
  .common-layout {
    background: $primary-color;
  }

  .common-layout .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
  }

  .common-layout > .el-container {
    display: flex;
    flex-direction: column;
  }
  .page-router-view {
    background: white;
    border: 1px solid #ccc;
    display: flex;
    flex-grow: 1;
    height: 100%;
  }
</style>
