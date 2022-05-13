<template>
  <div class="login">
    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<script lang="ts" setup name="login">
  import { useAppStore } from '/@/store/app'
  import { message } from 'ant-design-vue'

  import dayjs from 'dayjs'
  const appStore = useAppStore()
  interface loginModel {
    credential: string
    identifier: string
    loginMode: number
    orgCodeX: null | string | undefined
  }
  const handleClick = () => {
    const params: loginModel = {
      credential: 'YWRtaW4xMjM0NTY=',
      identifier: 'lg007',
      loginMode: 2,
      orgCodeX: null,
    }
    console.log(message)
    message.success('成功')
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
