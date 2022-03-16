<template>
  <el-aside width="200px">
    <Menu />
  </el-aside>
</template>

<script lang="ts" setup>
  import Menu from '/@/components/Menu/Index.vue'
</script>

<style scoped lang="scss">
  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
  }
</style>
