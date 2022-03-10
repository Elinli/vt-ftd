<template>
  <div
    >{{ a }}

    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  const a = reactive([])
  const handleClick = async () => {
    console.log(1)

    console.log(2)
  }
</script>

<style scoped lang="scss"></style>
