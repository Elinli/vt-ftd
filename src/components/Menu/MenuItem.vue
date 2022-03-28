<template>
  <el-menu-item :index="menuItem.path">
    <ItemContent :item="menuItem" />
  </el-menu-item>
</template>

<script lang="ts" setup>
  import ItemContent from './ItemContent.vue'
  defineProps({
    menuItem: {
      type: Object,
      default: () => ({}),
    },
  })
</script>

<style scoped lang="scss"></style>
