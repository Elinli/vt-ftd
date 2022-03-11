import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    menu: [],
  }),
  getters: {},
  actions: {},
})
