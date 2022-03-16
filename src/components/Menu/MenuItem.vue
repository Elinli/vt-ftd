<template>
  <el-menu-item :index="menuItem.path" @click="handleMenuItemClick">
    <ItemContent :item="menuItem" />
  </el-menu-item>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router'
  import ItemContent from './ItemContent.vue'
  defineProps({
    menuItem: {
      type: Object,
      default: () => ({}),
    },
  })
  const router = useRouter()
  const handleMenuItemClick = (menuItem: any) => {
    console.log(menuItem)
    const { index } = menuItem
    router.push(index)
  }
</script>

<style scoped lang="scss"></style>
