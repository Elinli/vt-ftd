<template>
  <div class="login">
    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  const handleClick = () => {
    console.log(1)
    console.log(router)
    console.log(route)

    router.push('/chart')
    console.log(2)
  }
</script>

<style scoped lang="scss"></style>
