<template>
  <el-aside width="200px">
    <Menu />
  </el-aside>
</template>

<script lang="ts" setup>
  import Menu from '/@/components/Menu/index.vue'
</script>

<style scoped lang="scss">
  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    .menu-tree {
      display: flex;
      flex-grow: 1;
      overflow-x: hidden;
      background: brown;
      :deep .el-menu {
        flex-grow: 1;
        border: none;
        .el-sub-menu {
          .el-menu-item {
            padding: 0px !important;
            text-indent: 68px;
            box-sizing: border-box !important;
          }
        }
        .el-menu-item-group__title {
          display: none;
        }
        .el-sub-menu__title {
          @include boxSizing;
        }
        .item-content {
          @include alignCenter;
          .i-icon {
            margin-right: $p12;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
