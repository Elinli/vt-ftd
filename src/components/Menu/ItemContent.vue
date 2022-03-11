<template>
  <div class="item-content">
    <Icon :icon="getIcon" />
    <span> {{ getTitleName }}</span>
  </div>
</template>

<script lang="ts" setup>
  import { computed, defineProps, toRaw } from 'vue'
  import { useIcon } from '/@/hooks/components/useIcons'
  const { Icon } = useIcon()
  const props = defineProps({
    item: {
      type: Object,
      default: () => ({}),
    },
  })
  let iteme = toRaw(toRaw(props).item)
  console.log(iteme)

  const getIcon = computed(() => iteme.icon)
  const getTitleName = computed(() => iteme.title)
</script>

<style scoped lang="less"></style>
