<template>
  <div> {{ a }}{{ b }} </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  const a = reactive([])
  const b = ref(1)
</script>

<style scoped lang="less"></style>
