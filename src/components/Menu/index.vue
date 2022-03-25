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
  import { reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import RenderMenu from './RenderMenu.vue'
  import { Menu } from '/@/interface/app'
  const menu = [
    {
      name: 'chart',
      path: '/chart',
      title: '图表',
      parent: 'root',
      icon: 'Delete',
      redirect: '/echart',
      children: [
        {
          name: 'chartIndex',
          path: '/echart',
          title: '图表首页',
          parent: 'chart',
          icon: '',
          children: [],
          hideChildren: true,
          uniqueId: 3,
          level: 2,
        },
        {
          name: 'chartDetail',
          path: '/echart/detail',
          title: '图表详情',
          parent: 'chart',
          icon: '',
          children: [],
          hideChildren: true,
          uniqueId: 3,
          level: 2,
        },
      ],
      hideChildren: false,
      uniqueId: 2,
      level: 1,
    },

    {
      name: 'employ',
      path: '/employ',
      title: '职工',
      parent: 'root',
      icon: 'Clear',
      children: null,
      hideChildren: true,
      uniqueId: 1,
      level: 1,
    },
  ]
  let menuData = reactive([]) as Menu[]
  menuData = menu as Array<Menu>
  const router = useRouter()
  const route = useRoute()
  console.log('route', route)
  console.log('router', router)
  console.log('menuData', menuData)
</script>

<style scoped lang="scss"></style>
