<template>
  <el-header>
    <img
      src="https://img2.baidu.com/it/u=847814196,756963172&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=468"
      alt=""
    />
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  </el-header>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
  .el-header {
    padding: 0;
    background-color: $white;
    color: var(--el-text-color-primary);
    @include flexBetween;
    .el-avatar {
      margin-right: $p12;
    }
  }
</style>
