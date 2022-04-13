<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts" setup name="error-page">
  import { useRouter } from 'vue-router'
  import { ref, toRaw, watchEffect } from 'vue'
  const router = useRouter()
  const msg = ref('错误页面')
  const errorPageTips = {
    '/404': '404页面',
    '/403': '403页面',
    '/500': '500页面',
  }
  watchEffect(() => {
    const ddd = toRaw(router).currentRoute.value.path
    if (Object.keys(errorPageTips).includes(ddd)) {
      msg.value = errorPageTips[ddd]
    } else {
      msg.value = '错误页面'
    }
  })
</script>

<style scoped lang="scss"></style>
