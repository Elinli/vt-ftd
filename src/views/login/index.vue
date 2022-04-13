<template>
  <div class="login">
    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<script lang="ts" setup name="login">
  import { useAppStore } from '/@/store/app'
  import dayjs from 'dayjs'
  const appStore = useAppStore()
  const handleClick = () => {
    const params: {
      credential: string
      identifier: string
      loginMode: number
      orgCodeX: null | string | undefined
    } = {
      credential: 'YWRtaW4xMjM0NTY=',
      identifier: 'lg007',
      loginMode: 2,
      orgCodeX: null,
    }
    console.log(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))

    appStore.fetchAuthority(params)
  }
</script>

<style scoped lang="scss">
  .login {
    @include flexCenter;
    flex-grow: 1;
  }
</style>
