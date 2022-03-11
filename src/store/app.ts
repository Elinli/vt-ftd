import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'app',
  state: () => ({
    menu: [],
  }),
  getters: {},
  actions: {},
})
