<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router'
  import { ref, toRaw, watchEffect } from 'vue'
  const router = useRouter()
  const route = useRoute()
  const msg = ref('错误页面')
  // const currentRoute = ref(toRaw(route))
  // console.log(currentRoute)
  // if (currentRoute.value.path === '/404') {
  //   msg.value = '404页面'
  // } else if (currentRoute.value.path === '/403') {
  //   msg.value = '403页面'
  // } else if (currentRoute.value.path === '/500') {
  //   msg.value = '500页面'
  // }

  // watch(
  //   () => currentRoute.value,
  //   (newVal, oldVal) => {
  //     console.log(newVal)
  //     console.log(oldVal)
  //   },
  // )
  watchEffect(() => {
    // console.log(currentRoute.value)
    console.log('route', toRaw(route))
    console.log('router', toRaw(router).currentRoute.value.path)
    const ddd = toRaw(router).currentRoute.value.path
    if (ddd === '/404') {
      msg.value = '404页面'
    } else if (ddd === '/403') {
      msg.value = '403页面'
    } else if (ddd === '/500') {
      msg.value = '500页面'
    }
    console.log('watchEffect')
  })
  console.log(toRaw(router.currentRoute).value.path)
</script>

<style scoped lang="scss"></style>
