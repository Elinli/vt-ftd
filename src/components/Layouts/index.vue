<template>
  <div class="common-layout">
    <el-container>
      <el-header><h1>hello v3</h1></el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <div> <router-view /> </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
  .common-layout .el-header,
  .common-layout .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }
  .common-layout .el-footer {
    line-height: 60px;
  }

  .common-layout .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .common-layout .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  .common-layout > .el-container {
    margin-bottom: 40px;
  }
</style>
