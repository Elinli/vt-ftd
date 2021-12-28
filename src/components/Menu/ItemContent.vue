<template>
  <div class="icon">
    <Icon :icon="getIcon" />
    {{ getTitleName }}
  </div>
</template>

<script lang="ts">
  import { Icon } from './Icon'
  export default defineComponent({
    components: {
      Icon,
    },
    setup(props) {
      const getIcon = computed(() => props.item?.icon)
      const getTitleName = computed(() => props.item.title)
      return { getIcon, getTitleName }
    },
  })
</script>

<style scoped lang="less"></style>
