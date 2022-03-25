<template>
  <div class="common-layout">
    <el-container>
      <Header />
      <el-container>
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <Aside />
        <el-main>
          <div class="router-view"> <router-view /> </div>
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
    flex-grow: 1;
    display: flex;
  }

  .common-layout {
    .el-main {
      background-color: #e9eef3;
      color: var(--el-text-color-primary);
      padding: $p16;
      display: flex;
      @include boxSizing;
    }
    .el-aside {
      display: flex;
    }
  }

  .common-layout > .el-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .router-view {
    background: white;
    @include border;
    @include borderRadius;
    display: flex;
    flex-grow: 1;
    @include boxShadow;
  }
</style>
