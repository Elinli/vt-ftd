import { Menu } from './../interface/app'
import { defineStore } from 'pinia'
import { RequestParams } from '/@/interface/fetch'
import { staticMenu } from '/@/router/staticMenu'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    menu: [] as Menu[],
    authority: '',
  }),
  getters: {},
  actions: {
    async fetchAuthority(params: RequestParams) {
      try {
        console.log(3)

        console.log(params)

        this.authority = 'authorized'
      } catch (error) {
        console.log(33)

        // let the form component display the error
        return error
      }
    },
    async fetchMenu(params: RequestParams) {
      try {
        console.log(4, params)

        const result = await Promise.resolve(staticMenu)
        console.log(5)

        console.log({ result })
        // this.menu = result
      } catch (error) {
        console.log(44)

        // let the form component display the error
        return error
      }
    },
  },
})
