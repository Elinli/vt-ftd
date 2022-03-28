<template>
  <el-sub-menu :index="submenu.path">
    <template #title> <ItemContent :item="submenu" /></template>
    <el-menu-item-group>
      <el-menu-item
        :index="menuItem.path"
        v-for="menuItem in submenu.children"
        :key="menuItem.path"
      >
        <RenderMenu :menuItem="menuItem" />
      </el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
</template>

<script lang="ts" setup>
  import RenderMenu from './RenderMenu.vue'
  import ItemContent from './ItemContent.vue'
  defineProps({
    submenu: {
      type: Object,
      default: () => ({}),
    },
  })
</script>

<style scoped lang="less"></style>
