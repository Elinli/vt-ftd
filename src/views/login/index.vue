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
  import { login } from '/@/api/account'
  const router = useRouter()
  const route = useRoute()
  const store = useAppStore()

  const handleClick = () => {
    console.log(router)
    console.log(route)

    login({
      credential: 'dDEyMzQ1Ng==',
      identifier: 'lungtest1',
      loginMode: 2,
      orgCodeX: null,
    })
      .then((res: any) => {
        console.log(res)
      })
      .catch((err: any) => {
        console.log(err)
      })
    store.$patch({
      authority: 'adhajsdhakjfhsdgksh',
    })
    // router.push('/chart')
  }
</script>

<style scoped lang="scss">
  .login {
    @include flexCenter;
    flex-grow: 1;
  }
</style>
