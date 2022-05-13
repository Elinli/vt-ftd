<template>
  <div class="item-content">
    <Icon :icon="IconName" />
    <span> {{ TitleText }}</span>
  </div>
</template>

<script lang="ts" setup>
  import { useIcon } from '/@/hooks/components/useIcons'
  const { Icon } = useIcon()
  const props = defineProps({
    item: {
      type: Object,
      default: () => ({}),
    },
  })
  let iteme = toRaw(props).item

  const IconName = computed(() => iteme.icon)
  const TitleText = computed(() => iteme.title)
</script>

<style scoped lang="less"></style>
