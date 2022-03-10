<template>
  <div class="icon">
    <Icon :icon="getIcon" />
    {{ getTitleName }}
  </div>
</template>

<script lang="ts" setup>
  import { computed, defineProps } from 'vue'
  import { useIcon } from '/@/hooks/components/useIcons'
  const { Icon } = useIcon()
  defineProps({
    item: {
      type: Object,
      default: () => ({}),
    },
  })
  const getIcon = computed(() => item.icon)
  const getTitleName = computed(() => item.title)
</script>

<style scoped lang="less"></style>
