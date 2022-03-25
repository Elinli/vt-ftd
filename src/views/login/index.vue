<template>
  <div class="login">
    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router'
  // import { router as rootRouter } from '/@/router'
  // import { routerBeforeEach } from '/@/router/beforeEach'
  import { useAppStore } from '/@/store/app'
  const router = useRouter()
  const route = useRoute()
  const store = useAppStore()
  const handleClick = () => {
    console.log(1)
    console.log(router)
    console.log(route)
    store.$patch({
      authority: 'adhajsdhakjfhsdgksh',
    })
    router.push('/chart')
    console.log(2)
  }
</script>

<style scoped lang="scss"></style>
