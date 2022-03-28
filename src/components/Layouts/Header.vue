<template>
  <el-header>
    <img :src="headerBackground" alt="" class="img-header" />
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  </el-header>
</template>

<script lang="ts" setup>
  import headerBackground from '/@/assets/images/header-background.png'
</script>

<style scoped lang="scss">
  .el-header {
    padding: 0;
    background-color: $white;
    color: var(--el-text-color-primary);
    z-index: 9;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
    @include flexBetween;
    .img-header {
      height: 60px;
    }
    .el-avatar {
      margin-right: $p12;
    }
  }
</style>
