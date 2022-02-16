<template>
  <div> {{ a }}{{ b }} </div>
  <div>
    <p v-for="item in computedResult" :key="item.date">
      {{ item.festival }}: {{ item.days }}天{{ item.hours }}小时{{ item.minutes }}分钟{{
        item.seconds
      }}秒
    </p>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive, ref } from 'vue'
  const a = reactive([])
  const b = ref(new Date())
  const staticDays = reactive([
    { date: '2022-04-03', festival: '清明节' },
    { date: '2022-04-30', festival: '劳动节' },
    { date: '2022-06-03', festival: '端午节' },
    { date: '2022-09-10', festival: '中秋节' },
    { date: '2022-10-01', festival: '国庆节' },
    { date: '2023-01-01', festival: '元旦节' },
    { date: '2023-01-21', festival: '春节' },
  ])
  const computedResult = computed(() => {
    const bb = ref(new Date())
    return staticDays.map((item) => {
      const totalMilliseconds = Math.abs(bb.value.getTime() - new Date(item.date).getTime())
      const milliseconds = Math.floor(totalMilliseconds % 1000)

      const seconds = Math.floor(totalMilliseconds / 1000) % 60
      const minutes = Math.floor(totalMilliseconds / 1000 / 60) % 60
      const hours = Math.floor((totalMilliseconds / 1000 / 60 / 60) % 24)
      const days = Math.floor(totalMilliseconds / 1000 / 60 / 60 / 24)
      return {
        date: item.date,
        festival: item.festival,
        totalMilliseconds,
        milliseconds,
        seconds,
        minutes,
        hours,
        days,
      }
    })
  })
</script>

<style scoped lang="less"></style>
