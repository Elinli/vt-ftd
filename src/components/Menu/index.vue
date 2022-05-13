<template>
  <div class="menu-tree">
    <el-menu :router="true" :default-active="route.path">
      <template v-for="menuItem in menuData" :key="menuItem.path">
        <RenderMenu :menuItem="menuItem" />
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
  import RenderMenu from './RenderMenu.vue'
  import { staticMenu } from '/@/router/staticMenu'
  import { Menu } from '/@/interface/app'

  let menuData = ref([]) as Menu[]
  menuData.value = staticMenu as Array<Menu>
  const router = useRouter()
  const route = useRoute()
  console.log('route', route)
  console.log('router', router)
  console.log('menuData', menuData)
</script>

<style scoped lang="scss"></style>
