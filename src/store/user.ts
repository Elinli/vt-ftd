import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'user',
  state: () => ({
    roles: [],
  }),
  getters: {},
  actions: {},
})
