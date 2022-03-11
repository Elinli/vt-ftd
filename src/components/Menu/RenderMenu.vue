<template>
  <div v-if="menuItem.hideChildren">
    <MenuItem :menuItem="menuItem" />
  </div>
  <div v-else> <SubMenu :submenu="menuItem" /></div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import SubMenu from './SubMenu.vue'
  import MenuItem from './MenuItem.vue'
  defineProps({
    menuItem: {
      type: Object,
      default: () => ({}),
    },
  })
</script>

<style scoped lang="scss"></style>
