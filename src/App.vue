<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <el-button type="primary">点击</el-button>
  <Home /><Compass /><BalanceTwo />
  <FullscreenOutlined />
  <FullscreenExitOutlined />
</template>
<script lang="ts" setup>
  import HelloWorld from './components/HelloWorld.vue'
  import { Home, Compass, BalanceTwo } from '@icon-park/vue-next'
</script>
<style lang="scss"></style>
