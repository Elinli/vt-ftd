<template>
  <div class="menu-tree">
    <el-menu>
      <template v-for="menuItem in menuData" :key="menuItem.path">
        <RenderMenu :menuItem="menuItem" />
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import RenderMenu from './RenderMenu.vue'
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
  let menuData = reactive([])
  menuData = menu
</script>

<style scoped lang="scss"></style>
